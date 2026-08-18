#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve(process.argv[2] || process.cwd());
const requiredDirectories = ['assets', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'];
const optionalDirectories = ['blocks'];

function countFiles(directory) {
  if (!existsSync(directory)) return 0;
  return readdirSync(directory).reduce((count, entry) => {
    const path = join(directory, entry);
    return count + (statSync(path).isDirectory() ? countFiles(path) : 1);
  }, 0);
}

function collectFiles(directory, predicate, files = []) {
  if (!existsSync(directory)) return files;
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) collectFiles(path, predicate, files);
    else if (predicate(path)) files.push(path);
  }
  return files;
}

function stripShopifyHeader(source) {
  return source.replace(/^\uFEFF/, '').replace(/^\s*\/\*[\s\S]*?\*\/\s*/, '');
}

function git(args) {
  try {
    return execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

const directories = [...requiredDirectories, ...optionalDirectories].map((name) => ({
  name,
  exists: existsSync(join(root, name)),
  fileCount: countFiles(join(root, name)),
}));

const jsonErrors = [];
for (const file of ['config', 'locales', 'sections', 'templates'].flatMap((name) =>
  collectFiles(join(root, name), (path) => path.endsWith('.json'))
)) {
  try {
    JSON.parse(stripShopifyHeader(readFileSync(file, 'utf8')));
  } catch (error) {
    jsonErrors.push({ file: relative(root, file), error: error.message });
  }
}

const themeLayout = join(root, 'layout', 'theme.liquid');
const layoutSource = existsSync(themeLayout) ? readFileSync(themeLayout, 'utf8') : '';
const gitStatusText = git(['status', '--short']);

const result = {
  root,
  isThemeRoot: requiredDirectories.every((name) => existsSync(join(root, name))),
  missingRequiredDirectories: requiredDirectories.filter((name) => !existsSync(join(root, name))),
  directories,
  themeLayout: {
    exists: existsSync(themeLayout),
    hasContentForHeader: layoutSource.includes('content_for_header'),
    hasContentForLayout: layoutSource.includes('content_for_layout'),
  },
  jsonErrors,
  git: {
    branch: git(['branch', '--show-current']),
    status: gitStatusText === null ? null : gitStatusText.split('\n').filter(Boolean),
  },
};

process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
process.exitCode = result.isThemeRoot && jsonErrors.length === 0 ? 0 : 1;
