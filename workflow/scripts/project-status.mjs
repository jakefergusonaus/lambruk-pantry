#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const flags = new Set(process.argv.slice(2));
const jsonOutput = flags.has('--json');
const offline = flags.has('--offline');

function findProjectRoot(start) {
  let current = resolve(start);
  while (true) {
    if (existsSync(join(current, 'PROJECT_CONFIG.json'))) return current;
    const parent = dirname(current);
    if (parent === current) return null;
    current = parent;
  }
}

function run(command, args, cwd) {
  try {
    return { ok: true, stdout: execFileSync(command, args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    }).trim() };
  } catch (error) {
    return {
      ok: false,
      stdout: error.stdout?.toString().trim() || '',
      stderr: error.stderr?.toString().trim() || error.message,
    };
  }
}

function parseJson(text) {
  try { return JSON.parse(text); } catch { return null; }
}

function normalizeThemes(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.themes)) return payload.themes;
  if (payload?.theme) return [payload.theme];
  return [];
}

function cleanTheme(theme) {
  return theme ? {
    id: String(theme.id ?? ''),
    name: theme.name ?? '',
    role: theme.role ?? '',
    previewUrl: theme.preview_url ?? theme.previewUrl ?? '',
    editorUrl: theme.editor_url ?? theme.editorUrl ?? '',
  } : null;
}

const projectRoot = findProjectRoot(process.cwd()) || findProjectRoot(dirname(fileURLToPath(import.meta.url)));
const blockers = [];
const warnings = [];
let config = null;

if (!projectRoot) blockers.push('PROJECT_CONFIG.json was not found.');
if (projectRoot) {
  try { config = JSON.parse(readFileSync(join(projectRoot, 'PROJECT_CONFIG.json'), 'utf8')); }
  catch (error) { blockers.push(`PROJECT_CONFIG.json is invalid JSON: ${error.message}`); }
}

const domain = config?.storeDomain?.trim() || '';
const domainValid = /^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(domain) && domain !== 'example.myshopify.com';
if (!domainValid) blockers.push('Configure an exact .myshopify.com storeDomain in PROJECT_CONFIG.json.');

const rawThemeRoot = config?.themeRoot?.trim() || '.';
const themeRoot = projectRoot ? resolve(projectRoot, rawThemeRoot) : resolve(process.cwd(), rawThemeRoot);
if (projectRoot && isAbsolute(rawThemeRoot)) warnings.push('themeRoot is absolute; use a relative path to keep the project portable.');
if (projectRoot && relative(projectRoot, themeRoot).startsWith('..')) blockers.push('themeRoot must stay inside the project folder.');

const requiredDirs = ['assets', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'];
const missingDirs = requiredDirs.filter((name) => !existsSync(join(themeRoot, name)));
if (missingDirs.length) blockers.push(`Theme root is incomplete; missing: ${missingDirs.join(', ')}.`);

const gitBranch = projectRoot ? run('git', ['branch', '--show-current'], projectRoot) : { ok: false };
const gitStatus = projectRoot ? run('git', ['status', '--short'], projectRoot) : { ok: false };
if (!gitBranch.ok || !gitStatus.ok) warnings.push('Git repository state is unavailable.');

const cli = process.env.SHOPIFY_CLI_BIN || 'shopify';
const cliVersion = run(cli, ['version'], projectRoot || process.cwd());
if (!cliVersion.ok) blockers.push('Shopify CLI is unavailable. Install it or set SHOPIFY_CLI_BIN.');

let liveTheme = null;
let developmentTheme = null;
let reviewTheme = null;
let remoteAccess = offline ? 'skipped' : 'not-checked';

if (!offline && cliVersion.ok && domainValid) {
  const listResult = run(cli, ['theme', 'list', '--store', domain, '--path', themeRoot, '--json'], projectRoot);
  if (!listResult.ok) {
    remoteAccess = 'failed';
    blockers.push(`Shopify store/theme access failed: ${listResult.stderr}`);
  } else {
    remoteAccess = 'ok';
    const themes = normalizeThemes(parseJson(listResult.stdout)).map(cleanTheme);
    const liveThemes = themes.filter((theme) => theme.role === 'live');
    if (liveThemes.length !== 1) blockers.push(`Expected exactly one live theme; found ${liveThemes.length}.`);
    liveTheme = liveThemes[0] || null;

    const devResult = run(cli, ['theme', 'info', '--store', domain, '--path', themeRoot, '--development', '--json'], projectRoot);
    if (devResult.ok) developmentTheme = cleanTheme(normalizeThemes(parseJson(devResult.stdout))[0]);
    else warnings.push('No development theme was resolved for this CLI environment; start shopify theme dev when ready.');

    const reviewId = String(config?.reviewTheme?.id ?? '').trim();
    const reviewName = String(config?.reviewTheme?.name ?? '').trim();
    if (reviewId || reviewName) {
      const matches = themes.filter((theme) => {
        if (reviewId && reviewName) return theme.id === reviewId && theme.name === reviewName;
        return reviewId ? theme.id === reviewId : theme.name === reviewName;
      });
      if (matches.length !== 1) blockers.push(`Configured review theme resolved to ${matches.length} themes; use one exact ID or unique name.`);
      else if (matches[0].role !== 'unpublished') blockers.push(`Configured review theme has role ${matches[0].role}; it must be unpublished.`);
      else reviewTheme = matches[0];
    }
  }
}

const status = {
  project: { root: projectRoot, label: config?.projectLabel ?? '', storeDomain: domain, themeRoot, baseTheme: config?.baseTheme ?? '' },
  git: {
    available: Boolean(gitBranch.ok && gitStatus.ok),
    branch: gitBranch.ok ? gitBranch.stdout : null,
    dirty: gitStatus.ok ? Boolean(gitStatus.stdout) : null,
    files: gitStatus.ok ? gitStatus.stdout.split('\n').filter(Boolean) : null,
  },
  shopify: { cli, cliVersion: cliVersion.ok ? cliVersion.stdout : null, remoteAccess, liveTheme, developmentTheme, reviewTheme },
  ready: blockers.length === 0,
  blockers,
  warnings,
  commands: domainValid ? {
    login: `${cli} auth login --store ${domain}`,
    development: `${cli} theme dev --store ${domain} --path ${rawThemeRoot} --theme-editor-sync --reconciliation-strategy abort`,
  } : null,
};

if (jsonOutput) process.stdout.write(`${JSON.stringify(status, null, 2)}\n`);
else {
  const lines = [
    `Project: ${status.project.label || '(not configured)'}`,
    `Store: ${domain || '(not configured)'}`,
    `Theme root: ${themeRoot}`,
    `Git: ${status.git.available ? `${status.git.branch || '(detached)'} · ${status.git.dirty ? 'dirty' : 'clean'}` : 'unavailable'}`,
    `Shopify CLI: ${status.shopify.cliVersion || 'unavailable'}`,
    `Remote access: ${remoteAccess}`,
    `Live theme: ${liveTheme ? `${liveTheme.name} (${liveTheme.id}) · read-only` : 'not resolved'}`,
    `Development theme: ${developmentTheme ? `${developmentTheme.name} (${developmentTheme.id})` : 'not resolved'}`,
    `Review theme: ${reviewTheme ? `${reviewTheme.name} (${reviewTheme.id})` : 'not configured/resolved'}`,
    `Status: ${status.ready ? 'READY' : 'BLOCKED'}`,
  ];
  if (warnings.length) lines.push('', 'Warnings:', ...warnings.map((item) => `- ${item}`));
  if (blockers.length) lines.push('', 'Blockers:', ...blockers.map((item) => `- ${item}`));
  if (status.commands?.development) lines.push('', 'Development command:', status.commands.development);
  process.stdout.write(`${lines.join('\n')}\n`);
}

process.exitCode = status.ready ? 0 : 1;
