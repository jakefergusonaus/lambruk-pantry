# Jake’s Guide to the Shopify AI Harness

## What this template is

This is a reusable starter folder for building Shopify themes with **Claude Code or Codex**. It does not replace Shopify, Git, or Shopify CLI. It gives the AI a clear, safer way to inspect a theme, make changes, preview them, and avoid accidentally changing the published site.

The basic idea is:

> Work locally against a development theme, check the result in the browser, and treat the published theme as read-only.

You only need to know a few files:

- `PROJECT_CONFIG.json` — identifies the project, store, and theme folder.
- `START_HERE.md` — the short startup checklist.
- `README.md` — fuller instructions when needed.
- `workflow/` — the shared working rules Claude and Codex follow.

## Starting a new project

### 1. Copy and rename the template

Duplicate `[TEMPLATE]shopify-ai-harness-v2`, rename the copy for the client, and work inside that copy. Keep the original template untouched.

### 2. Configure the project

Fill in `PROJECT_CONFIG.json` with:

- a project label
- the exact `.myshopify.com` store domain
- the theme root, normally `.`
- the base-theme name, if known
- an optional unpublished review-theme ID or name

Never put passwords or access tokens in this file.

### 3. Set up Git

Create a clean starting point before adding the Shopify theme:

```bash
git init
git add -A
git commit -m "Initial Shopify harness"
```

### 4. Connect Shopify CLI

Make sure Shopify CLI is installed and sign in to the correct store:

```bash
shopify auth login --store client-store.myshopify.com
```

Copy the store domain from Shopify Admin rather than guessing it.

### 5. Pull in the theme

List the store’s themes first:

```bash
shopify theme list --store client-store.myshopify.com --json
```

Confirm the theme’s name, ID, and role. Then pull the chosen theme into the project:

```bash
shopify theme pull --store client-store.myshopify.com --theme THEME_ID --path .
```

Pulling downloads the remote files locally; it does not change the remote theme. Commit the untouched theme afterwards so there is a reliable baseline:

```bash
git add -A
git commit -m "Baseline Shopify theme"
```

If the theme files are already local, add them to the configured theme root instead of pulling them again.

## Beginning each work session

Open the project in Claude Code or Codex. In Claude Code, run `/shopify-start`; otherwise ask the AI to start the Shopify project. Both tools use this read-only check:

```bash
node workflow/scripts/project-status.mjs
```

It checks the Git branch and working tree, Shopify CLI, store access, live theme, development theme, and optional review theme. Fix any wrong store, unexpected theme, authentication problem, or unsafe local state before coding.

## Developing and previewing

Start Shopify’s development preview:

```bash
shopify theme dev --store client-store.myshopify.com --path . \
  --theme-editor-sync --reconciliation-strategy abort
```

This creates a preview, Theme Editor link, and development theme. Each developer should normally use their own development theme.

Give the AI a clear task and an exact reference—such as a Figma node, screenshot with viewport, or existing component. Ask it to inspect the current Liquid, CSS, JavaScript, and rendered page before replacing anything.

Use the amount of process that fits the work:

- **Micro-fix:** one or two known, low-risk files.
- **Fast path:** a bounded feature or multi-file adjustment.
- **Full pipeline:** a new build, template, major redesign, or architectural change.

## Checking the result

The AI should keep these checks separate:

- **Static:** Liquid/JSON validity and Theme Check.
- **Runtime:** rendered page, console, network, and interactions.
- **Visual:** reference comparison on desktop, tablet, and mobile.
- **Commerce:** affected product, collection, cart, search, filter, account, localization, or app flows.

A passing Theme Check does not prove the page looks or behaves correctly. If the correct preview cannot be opened, visual verification is blocked—not passed.

## Theme Editor changes

The development command above safely synchronises Theme Editor changes while it is running. For changes made outside that session, inspect them without touching local files:

```bash
node workflow/scripts/reconcile-theme-editor.mjs inspect --source development
```

After reviewing the comparison, apply only the files you actually want:

```bash
node workflow/scripts/reconcile-theme-editor.mjs apply \
  --source development --only templates/product.json
```

The helper will not overwrite a locally changed file. Compare and merge that file carefully instead.

## The rules worth remembering

1. The published theme is read-only during development.
2. Confirm the store, theme, role, and direction before every pull or push.
3. Never use `--live`, `--allow-live`, or `--publish` as part of normal work.
4. Preserve existing Shopify product, variant, pricing, cart, search, filter, localization, app, and analytics behaviour unless the task requires a deliberate change.
5. Keep credentials out of files and commits.
6. Publish only as a separate, explicit step after preview approval.

If you give this file to an LLM, simply say:

> Explain this workflow in plain English, check which stage my project is at, and guide me through the next step only. Do not change the published theme.
