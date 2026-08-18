# Claude Code adapter

`workflow/PIPELINE.md` is the authoritative operating guide for this project.

Entry points:

- `/shopify-start` — read-only project, Git and Shopify readiness
- `/brief` — intake and design ingestion only
- `/build-shopify` — full pipeline
- `/qa` — static, runtime, visual and commerce verification

For ordinary work, read `START_HERE.md`, run the status helper, and select the
task size from the shared pipeline. Path rules in `.claude/rules/` add concise
file-specific checks but do not replace the pipeline.

Do not trust remembered branch, dirty-tree, CLI, authentication or theme-role
state. Query it immediately before edits, commits and remote transfers.

The published theme is read-only. Never use `--live`, `--allow-live` or
`--publish`, and never mutate store data as an incidental theme-build step.

---

# Project: Lambruk Pantry

Shopify theme built by Akima Studio as their Shopify Partner.

- **Store:** `37b2e5-fc.myshopify.com` — **live store with real customers and real orders**
- **Live domain:** `lambrukpantry.com` — serving customers throughout the build
- **Base theme:** Horizon (theme-blocks architecture — *not* Dawn)
- **Goal:** Complete rebuild. Nothing from the existing theme's design or content carries over. Treat it as a clean build, not a migration. Do not read from or replicate the old theme's markup, sections or settings.
- **Design source:** `design/` — HTML mockups produced in Claude. Visual reference, not code to port.

## Theme IDs

| Theme | ID | Status | Notes |
|---|---|---|---|
| **Horizon** | `182395437357` | unpublished | **Our theme.** All work targets this ID. |
| Flux | `177861689645` | **LIVE** | Being replaced. Never write to it, never copy from it. |
| BACKUP of Flux – 16.9.25 | `177954521389` | unpublished | Client's rollback snapshot. Leave alone. |
| Expanse | `168500887853` | unpublished | Not used. |
| Dawn | — | unpublished | Not used. |

**Never run a `shopify theme` command without an explicit `--theme <id>`.** Without it the CLI wants to prompt interactively, and an agent that cannot answer a prompt will guess — the guess defaults to the live theme. This has already happened once on this project.

## Customisation hierarchy

Work down this list. Only move down a level when the one above genuinely can't do the job. This is what keeps the theme upgradable when Shopify ships Horizon updates.

1. **Theme settings** — `config/settings_schema.json`. Colour schemes, type scale, spacing, corner radius. Most of the design system should land here.
2. **CSS custom properties** — override Horizon's existing tokens. Do not rewrite its stylesheets.
3. **Theme blocks** — new blocks in `blocks/`. The right place for genuinely new UI.
4. **Section overrides** — copy a Horizon section, modify it. Leaves an upgrade burden; record it.
5. **Core Liquid edits** — last resort. Requires explicit sign-off in conversation before writing.

**Never** rebuild markup wholesale from the HTML mockup. Extract the design *decisions* — type scale, colour, spacing, component shapes — and express them through the layers above.

## URLs and redirects

The client's live URLs carry search rankings and inbound links. Protect them.

- `url-baseline.md` — every URL on the live store as of 18 Aug 2026, captured before the rebuild. Read-only. Never edit.
- `redirects.md` — running log of URLs that change. The deliverable for go-live day.

1. **Never change a page, product, collection or article handle without asking first.** Handles live in the admin, not the theme, so ordinary theme work cannot touch them. If a task appears to require one, stop and raise it.
2. **If a handle does change, add a row to `redirects.md` in the same session.** Not later.
3. **Resist tidying handles.** `url-baseline.md` lists several with typos (`dehyrated-oranges`, `monring-tea-tea-bags-5`). They are live URLs earning traffic; fixing them is the client's call.
4. **Before go-live**, reconcile `redirects.md` against `url-baseline.md` and confirm every changed URL has a redirect in the admin.

## Apps

Three installed, none of which constrain the theme build:

- *Instant AI Page Builder* — theme embed present but disabled. Not carried over; uninstall candidate.
- *EZ Importer* — admin-only, no storefront output.
- *Messaging* — the only one with possible storefront presence. Confirm before go-live.

**There is no app-block migration work on this project.** Build Horizon clean.

## Known project facts

- **Go-live:** no fixed date. Ships when ready. There is never a reason to cut a corner for time — flag tradeoffs rather than absorbing them.
- **Client editor access during build:** not required. Review via preview links at milestones only.
- **Client traffic:** assume majority mobile until proven otherwise. Test at mobile widths.

## Open questions

- [ ] Does the Messaging chat widget need to appear on the new theme?
- [ ] Does the client want the typo'd product handles fixed? Their call — each needs a redirect.
- [ ] Is `/products/tomato-capsicum-relish-260g-1` a duplicate of `/products/tomato-capsicum-relish-260g`?
