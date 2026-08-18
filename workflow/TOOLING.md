# Shopify tooling map

Use the tools available on the current host. Do not assume a personal CLI path,
browser plugin name or remembered command flags.

## Startup and theme identity

```bash
node workflow/scripts/project-status.mjs
shopify version
shopify theme list --store example.myshopify.com --json
shopify theme info --store example.myshopify.com --development --json
```

`project-status.mjs` builds these commands from `PROJECT_CONFIG.json` and
queries the live role, development theme and optional review theme.

## Local development

Use the current developer's Shopify CLI development theme:

```bash
shopify theme dev \
  --store example.myshopify.com \
  --path . \
  --theme-editor-sync \
  --reconciliation-strategy abort
```

Shopify development themes are environment-specific and temporary. Use a
confirmed unpublished theme for a durable review link.

## Validation

```bash
git diff --check
shopify theme check --path . --output json
node workflow/scripts/inspect-theme.mjs .
```

Theme Check is static validation. It cannot prove selectors match, layouts are
correct or interactions work.

## Remote transfers

Immediately before a pull, push or share, confirm store, theme ID/name/role,
local path, direction and selected files. Inspect current CLI help if flags
matter.

Never use `--live`, `--allow-live` or `--publish`.

Prefer file-scoped transfers. A durable review upload targets only an exact
unpublished theme confirmed in `PROJECT_CONFIG.json` and revalidated remotely.

## Theme Editor changes

```bash
node workflow/scripts/reconcile-theme-editor.mjs inspect --source development
node workflow/scripts/reconcile-theme-editor.mjs apply \
  --source development \
  --only templates/product.json
```

Inspection stages a remote copy and prints a comparison without changing local
theme files. Apply refuses dirty target files, deletions, live targets and
unselected files.

## Design sources and browser QA

- Figma: reopen exact file/node references and use exported assets rather than
  recreating them approximately.
- Screenshots: record viewport and distinguish observation from inference.
- Live prototype: inspect DOM, computed style, interactions, network and route.
- Existing theme: preserve its settings, events, app hooks and commerce data.

Browser QA must open the intended development/unpublished theme, set explicit
viewports, inspect console/network and exercise affected behaviour. A canonical
storefront redirect that loses preview context is a blocker, not a pass.

## Capability failures

- No configuration: complete `PROJECT_CONFIG.json`.
- No theme root: add/pull the selected base theme after confirmation.
- No CLI: install the current Shopify CLI.
- No authentication: run `shopify auth login --store <domain>`.
- No browser/correct preview: static work may continue; runtime and visual QA
  remain BLOCKED.
- Conflicting local and Theme Editor changes: inspect and merge manually; never
  choose a side silently.
