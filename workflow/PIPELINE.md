# Shopify theme workflow

This file is authoritative. Host adapters, commands, rules and phase files
point here rather than restating it.

## 1. Start from current state

Read `PROJECT_CONFIG.json` and run:

```bash
node workflow/scripts/project-status.mjs
```

Mutable state is queried, never remembered in prose. Immediately before an
edit, commit, pull, push or share, re-check the facts relevant to that action:

- branch and dirty files
- exact local theme root
- exact `.myshopify.com` domain
- remote theme ID, name and current role
- transfer direction and selected files
- current CLI help when flags are uncertain

Preserve unrelated work. Stop when the configured store or target role does
not match the intended action.

## 2. Choose the smallest correct task size

### Micro-fix

Use for a low-risk correction in one or two known files.

1. Inspect the immediate implementation and current diff.
2. Make only the requested change.
3. Run targeted syntax/structured-file checks.
4. Batch Theme Check before handoff or after the micro-fix batch.
5. Perform runtime/visual verification if appearance or behaviour changed.

Do not run intake, phase documents or project-artifact updates for each edit.

### Fast path

Use for a bounded multi-file feature, style adjustment or bug fix.

1. Inspect existing Liquid, CSS, JavaScript and rendered behaviour.
2. Reuse the theme's primitives and contracts.
3. Keep a narrow diff and validate changed structured files.
4. Run Theme Check once for the request batch.
5. Render and test affected viewports/interactions/commerce paths.
6. Add one concise `WORKFLOW_STATE.md` entry only when it materially helps the
   next session.

Do not repeat intake or initialise every full-build artefact.

### Full pipeline

Use for a new build, major redesign, new page/template family or substantial
architecture work. Follow Phases 0-10 and initialise the relevant templates.

If the task size is ambiguous, choose the smallest tier that still protects
commerce behaviour and gives the requested work adequate rendered testing.

## 3. Non-negotiable safety boundary

- The theme currently carrying Shopify's `live` role is read-only.
- Never use `--live`, `--allow-live` or `--publish`.
- Never push to, overwrite, delete, rename or publish the live theme.
- Active development uses each developer's Shopify CLI development theme.
- Durable client review uses one explicitly confirmed unpublished theme.
- Publishing requires a separate explicit request after preview approval.
- Never write credentials or tokens to files, commits or output.
- Never mutate products, collections, variants, prices, inventory, customers,
  orders, discounts, Markets, apps, metafield definitions or metaobjects as an
  incidental theme-build step.
- Store-data changes require a separate exact request, collision checks and
  confirmation of the connected store.

## 4. Inspect before changing

Treat the active base theme as a framework.

1. Search for the existing implementation before creating a replacement.
2. Trace relevant snippets, blocks, assets, settings, events and data sources.
3. Preserve proven commerce and editor contracts.
4. For visual or behavioural work, inspect the rendered DOM and computed
   styles before assuming selectors, generated IDs, scroll containers, custom
   properties or event behaviour.
5. Prefer a narrow extension or scoped override over replacement.

Search current official Shopify documentation when using a Liquid object,
filter, tag, schema feature or CLI flag that the theme does not already
exercise correctly. Do not repeat research for proven local patterns.

## 5. Design reference gate

Visual work needs a resolvable reference:

- Figma file key and node ID
- screenshot path and captured viewport
- prototype URL plus route/selector
- exact existing-theme file/component
- confirmed written requirement for non-visual behaviour

Re-open the reference before implementation. A prose summary of a visual is
not a substitute for the source. Resolve material conflicts using this order:

1. confirmed client/user decision
2. existing store behaviour and data contracts
3. designated design source
4. screenshots
5. clearly labelled inference

## 6. Shopify architecture and merchant controls

Preserve the selected base theme's architecture. Prefer server-rendered Liquid
with progressive enhancement, JSON templates, native resource settings,
dynamic sources, translations and app blocks where appropriate.

Expose merchant controls when content is expected to change without code,
varies by resource/market/campaign, requires genuine repeatable composition,
or belongs in Shopify custom data. Keep stable layout mechanics, decorative
details and bespoke visual structure in code unless configurability is
requested.

Never hardcode products, prices, variants, inventory or catalogue selection.

## 7. Theme Editor reconciliation contract

While local development is running, prefer:

```bash
shopify theme dev --theme-editor-sync --reconciliation-strategy abort
```

For changes made outside that session:

1. Run `reconcile-theme-editor.mjs inspect`.
2. Review the staged comparison.
3. Apply only explicitly named files.
4. If the same file is locally modified, do not overwrite it; merge manually.

Never pull a remote theme blindly into a dirty worktree.

## 8. Verification contract

Keep evidence types separate:

### Static/code

Parse changed JSON/schema, run `git diff --check`, validate Liquid where
available and run Theme Check. Attribute new findings separately from
pre-existing or unrelated findings.

### Runtime/browser

Inspect the rendered DOM, computed styles, console, failed requests and the
affected interactions. Source inspection alone cannot pass runtime checks.

### Visual/responsive

Compare the authoritative reference and theme at the source viewport plus
representative desktop, tablet and mobile widths. Check layout, typography,
spacing, cropping, overflow, states and motion. If screenshots or the correct
preview theme are unavailable, mark this BLOCKED.

### Commerce/functional

Exercise only affected real-data flows: product variants and forms, price,
cart, collection filters/sort, search, navigation, localisation, accounts,
apps or custom data. Never manufacture a test case by changing catalogue data.

Every applicable check is **PASS** with evidence, **FAIL** with detail or
**BLOCKED** with a reason. Static success never proves runtime or visual
success.

## 9. Full-pipeline phases

0. Intake and safety
1. Store/theme inventory
2. Design ingestion
3. Theme architecture and reference mapping
4. Incremental Liquid build
5. Commerce preservation
6. Theme Editor verification
7. Static validation
8. Runtime, visual and responsive QA
9. Commerce, accessibility, performance and SEO QA
10. Unpublished preview and handoff

Phase files contain the additional work for full projects. They do not apply
automatically to micro-fixes or fast-path tasks.

## 10. Handoff

Before reporting completion, inspect the final diff and state exactly:

- changed files and intended scope
- local branch and whether changes are committed
- remote theme changed, if any, including current role
- static, runtime, visual and commerce evidence separately
- blockers and unverified cases
- preview/editor links returned by Shopify
- **no `shopify theme dev` process is still running** (`ps aux | grep -i "shopify theme dev"`, expect no match) — checked and stated, not assumed. A dev server outliving the task it was started for is invisible: nothing in the transcript flags it, and it keeps silently overwriting anything the client does in the theme editor for as long as it runs. This is not "remember to stop it" — it is a check that gets run and its result reported, the same as Theme Check.

Stop before publication.
