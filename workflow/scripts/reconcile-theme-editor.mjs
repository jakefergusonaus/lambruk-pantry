#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const themeDirectories = new Set(['assets', 'blocks', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates']);
const argv = process.argv.slice(2);
const action = argv.shift();

function usage(message) {
  if (message) process.stderr.write(`Error: ${message}\n\n`);
  process.stderr.write([
    'Usage:',
    '  node workflow/scripts/reconcile-theme-editor.mjs inspect --source development|review',
    '  node workflow/scripts/reconcile-theme-editor.mjs apply --source development|review --only <file> [--only <file>]',
    '',
  ].join('\n'));
  process.exit(2);
}

function option(name) {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
}

function options(name) {
  const values = [];
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === name && argv[index + 1]) values.push(argv[index + 1]);
  }
  return values;
}

if (!['inspect', 'apply'].includes(action)) usage('Choose inspect or apply.');
const source = option('--source');
if (!['development', 'review'].includes(source)) usage('Source must be development or review.');
const selectedFiles = options('--only');
if (action === 'apply' && selectedFiles.length === 0) usage('Apply requires at least one explicit --only file.');

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
    return execFileSync(command, args, {
      cwd,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: process.env,
    }).trim();
  } catch (error) {
    const detail = error.stderr?.toString().trim() || error.stdout?.toString().trim() || error.message;
    throw new Error(`${command} ${args.join(' ')} failed: ${detail}`);
  }
}

function normalizeThemes(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.themes)) return payload.themes;
  if (payload?.theme) return [payload.theme];
  return [];
}

function hashFile(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function collectFiles(root, directory = root, result = new Map()) {
  if (!existsSync(directory)) return result;
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) collectFiles(root, path, result);
    else {
      const key = relative(root, path).split(sep).join('/');
      if (themeDirectories.has(key.split('/')[0])) result.set(key, hashFile(path));
    }
  }
  return result;
}

function safeThemePath(input) {
  const path = input.replaceAll('\\', '/').replace(/^\.\//, '');
  if (path.includes('..') || path.startsWith('/') || !themeDirectories.has(path.split('/')[0])) {
    throw new Error(`Unsafe or non-theme path: ${input}`);
  }
  return path;
}

const projectRoot = findProjectRoot(process.cwd());
if (!projectRoot) throw new Error('PROJECT_CONFIG.json was not found.');
const config = JSON.parse(readFileSync(join(projectRoot, 'PROJECT_CONFIG.json'), 'utf8'));
const domain = String(config.storeDomain || '').trim();
if (!/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(domain) || domain === 'example.myshopify.com') {
  throw new Error('Configure an exact .myshopify.com storeDomain first.');
}

const themeRoot = resolve(projectRoot, config.themeRoot || '.');
if (relative(projectRoot, themeRoot).startsWith('..')) throw new Error('themeRoot must stay inside the project.');
const cli = process.env.SHOPIFY_CLI_BIN || 'shopify';
const stageRoot = join(projectRoot, '.theme-editor-reconcile', source);
const remoteRoot = join(stageRoot, 'remote');
const manifestPath = join(stageRoot, 'manifest.json');

function resolveRemoteTheme() {
  if (source === 'development') {
    const payload = JSON.parse(run(cli, ['theme', 'info', '--store', domain, '--path', themeRoot, '--development', '--json'], projectRoot));
    const theme = normalizeThemes(payload)[0];
    if (!theme || theme.role !== 'development') throw new Error('No development theme was resolved for this CLI environment.');
    return theme;
  }

  const reviewId = String(config.reviewTheme?.id || '').trim();
  const reviewName = String(config.reviewTheme?.name || '').trim();
  if (!reviewId && !reviewName) throw new Error('Configure one unpublished review theme ID or exact name first.');
  const themes = normalizeThemes(JSON.parse(run(cli, ['theme', 'list', '--store', domain, '--path', themeRoot, '--json'], projectRoot)));
  const matches = themes.filter((theme) => {
    if (reviewId && reviewName) return String(theme.id) === reviewId && theme.name === reviewName;
    return reviewId ? String(theme.id) === reviewId : theme.name === reviewName;
  });
  if (matches.length !== 1) throw new Error(`Review theme resolved to ${matches.length} themes.`);
  if (matches[0].role !== 'unpublished') throw new Error(`Review theme role is ${matches[0].role}; expected unpublished.`);
  return matches[0];
}

if (action === 'inspect') {
  const branch = run('git', ['branch', '--show-current'], projectRoot);
  const remoteTheme = resolveRemoteTheme();
  if (remoteTheme.role === 'live') throw new Error('The published theme cannot be a reconciliation source.');

  rmSync(stageRoot, { recursive: true, force: true });
  mkdirSync(remoteRoot, { recursive: true });
  run(cli, ['theme', 'pull', '--store', domain, '--theme', String(remoteTheme.id), '--path', remoteRoot, '--nodelete', '--no-color'], projectRoot);

  const localFiles = collectFiles(themeRoot);
  const remoteFiles = collectFiles(remoteRoot);
  const allPaths = [...new Set([...localFiles.keys(), ...remoteFiles.keys()])].sort();
  const files = allPaths.map((path) => {
    const localHash = localFiles.get(path) || null;
    const remoteHash = remoteFiles.get(path) || null;
    const state = localHash === remoteHash ? 'identical' : !localHash ? 'remote-only' : !remoteHash ? 'local-only' : 'changed';
    return { path, state, localHash, remoteHash };
  });

  const manifest = {
    inspectedAt: new Date().toISOString(),
    source,
    projectRoot,
    themeRoot,
    branch,
    storeDomain: domain,
    remoteTheme: { id: String(remoteTheme.id), name: remoteTheme.name, role: remoteTheme.role },
    files,
  };
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const relevant = files.filter((file) => file.state !== 'identical');
  process.stdout.write([
    `Staged ${remoteTheme.name} (${remoteTheme.id}, ${remoteTheme.role}) without changing local theme files.`,
    `Staging directory: ${stageRoot}`,
    `Branch at inspection: ${branch || '(detached)'}`,
    '',
    relevant.length ? relevant.map((file) => `${file.state.padEnd(11)} ${file.path}`).join('\n') : 'No differences found.',
    '',
  ].join('\n'));
  process.exit(0);
}

if (!existsSync(manifestPath)) throw new Error(`No staged ${source} inspection exists. Run inspect first.`);
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const currentBranch = run('git', ['branch', '--show-current'], projectRoot);
if (manifest.branch !== currentBranch) throw new Error(`Branch changed since inspection (${manifest.branch} -> ${currentBranch}). Inspect again.`);

const records = new Map(manifest.files.map((file) => [file.path, file]));
const applied = [];
for (const input of selectedFiles) {
  const path = safeThemePath(input);
  const record = records.get(path);
  if (!record) throw new Error(`${path} was not present in the staged inspection.`);
  if (!['changed', 'remote-only'].includes(record.state)) throw new Error(`${path} is ${record.state}; there is no remote change to apply.`);

  const localPath = join(themeRoot, path);
  const remotePath = join(remoteRoot, path);
  if (!existsSync(remotePath)) throw new Error(`${path} does not exist remotely; deletions are never applied.`);

  const gitState = run('git', ['status', '--porcelain', '--', relative(projectRoot, localPath)], projectRoot);
  if (gitState) throw new Error(`${path} has local Git changes; merge it manually instead of overwriting it.`);
  const currentHash = existsSync(localPath) ? hashFile(localPath) : null;
  if (currentHash !== record.localHash) throw new Error(`${path} changed after inspection; inspect again.`);

  mkdirSync(dirname(localPath), { recursive: true });
  copyFileSync(remotePath, localPath);
  applied.push(path);
}

const statusPaths = applied.map((path) => relative(projectRoot, join(themeRoot, path)));
const diff = run('git', ['status', '--short', '--', ...statusPaths], projectRoot);
process.stdout.write([
  `Applied ${applied.length} explicitly selected file(s) from staged ${source} theme:`,
  ...applied.map((path) => `- ${path}`),
  '',
  'Git status:',
  diff || '(no changes)',
  '',
].join('\n'));
