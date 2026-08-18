# Shopify AI Harness V2

A lightweight operating system for building and refining Shopify Online Store
themes with Codex or Claude Code. It keeps the familiar V1 workflow while
fixing the problems that most often slowed real projects down: stale session
context, guessed theme internals, oversized process for small changes, unclear
verification, and unsafe Theme Editor pulls.

This folder is a project starter, not a framework or package. It uses normal
Shopify CLI, Git, Node.js, browser tools, Codex and Claude Code.

## Start a new project

1. Copy this folder and give the copy a client/project name.
2. Add an existing Shopify theme to the folder, or perform a confirmed pull
   after completing intake. The standard theme directories belong at the
   configured `themeRoot`.
3. Edit `PROJECT_CONFIG.json`. It contains no credentials.
4. Run:

   ```bash
   node workflow/scripts/project-status.mjs
   ```

5. If Shopify CLI is not authenticated, run:

   ```bash
   shopify auth login --store example.myshopify.com
   ```

6. For local development, run `shopify theme dev` using the command printed by
   the status helper. Keep Theme Editor reconciliation in abort-on-conflict
   mode.
7. Open Codex or Claude Code in the project root. Both agents read the same
   pipeline and project configuration.

Credentials, Theme Access passwords and tokens never belong in this folder.

## Familiar structure

```text
AGENTS.md / CLAUDE.md       Thin host adapters
START_HERE.md               Short startup checklist
PROJECT_CONFIG.json         One non-secret project configuration
SHOPIFY-THEME-SYSTEM.md     Shopify architecture principles
workflow/PIPELINE.md        Authoritative shared workflow
workflow/TOOLING.md         CLI, browser and reconciliation commands
workflow/phases/            Full-build phase details
workflow/sources/           Figma, HTML, URL and screenshot guidance
workflow/templates/         Optional full-build project artefacts
workflow/scripts/           Read-only status, inspection and safe reconciliation
.claude/                    Claude commands, rules and optional agents
.codex/                     Minimal Codex environment configuration
```

## How agents use it

- Codex reads `AGENTS.md` and follows `workflow/PIPELINE.md`.
- Claude Code reads `CLAUDE.md`; `/shopify-start`, `/build-shopify`, `/brief`
  and `/qa` are thin entry points into the same workflow.
- Mutable facts are queried at the time they matter. Agents do not trust old
  prose for the current branch, dirty files, CLI version, authentication or
  remote theme roles.

## Configure per project

`PROJECT_CONFIG.json` contains:

- a human-readable project label
- exact `.myshopify.com` domain
- relative theme root
- optional base-theme name
- optional shared unpublished review-theme ID or exact name

The published theme is discovered from Shopify's current `live` role and is
always read-only. Each developer uses the development theme owned by their own
Shopify CLI environment. The optional shared unpublished theme is only for
durable client review.

## Task sizing

- **Micro-fix:** one or two known low-risk files. Inspect locally, make the
  narrow change, run targeted checks, then batch Theme Check before handoff.
- **Fast path:** a bounded multi-file change. Inspect the existing
  implementation, validate changed structured files, run Theme Check once and
  render affected behaviour.
- **Full pipeline:** new builds, major redesigns, new templates/sections or
  architecture changes. Use Phases 0-10 and initialise the relevant artefacts
  from `workflow/templates/`.

The published-theme safety boundary applies at every size.

## Verification

Never use one kind of verification as proof of another:

| Type | Evidence |
|---|---|
| Static/code | JSON/Liquid parsing, `git diff --check`, Theme Check |
| Runtime/browser | Rendered DOM, computed styles, console/network and interactions |
| Visual/responsive | Reference comparison and screenshots at relevant desktop, tablet and mobile widths |
| Commerce/functional | Affected product, collection, cart, search, filter, account, localisation or app flows |

Every applicable result is **PASS** with evidence, **FAIL** with detail, or
**BLOCKED** with a reason. Static success never proves visual success.

## Theme Editor and local files

While `shopify theme dev` is running, prefer:

```bash
shopify theme dev --theme-editor-sync --reconciliation-strategy abort
```

If editor changes were made outside that session, inspect them without touching
the worktree:

```bash
node workflow/scripts/reconcile-theme-editor.mjs inspect --source development
```

After reviewing the comparison, apply only named clean files:

```bash
node workflow/scripts/reconcile-theme-editor.mjs apply \
  --source development \
  --only templates/product.json
```

The helper never targets the published theme, never applies deletions and never
overwrites a locally modified file.

## Safety summary

- Published theme is read-only.
- Never use `--live`, `--allow-live` or `--publish`.
- Confirm store, theme role, local path and direction immediately before remote
  transfer.
- Inspect the current theme like a framework before replacing its behaviour.
- Preserve product forms, variants, price, cart, search, filters, localisation,
  accounts, apps, analytics and custom-data contracts.
- Never mutate catalogue or operational store data as an incidental theme step.
- Publishing requires a separate explicit request after preview approval.

The full rules live in `workflow/PIPELINE.md`.
