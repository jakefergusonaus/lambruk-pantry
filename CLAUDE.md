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

**`design/` is the single source of truth for all design decisions — colour, type, spacing, component shape, everything.** `design/DESIGN-TOKENS.md` is a derived summary of it, written by re-reading the source and recording what was found. It can be wrong, and has been asserted-but-unverified in places. When it and the source disagree — or when a claim in it is doubted — re-read the actual source files (the mockup HTML's inline styles, component `.jsx` files, `tokens/*.css`) and correct the summary to match, never the reverse. Don't take the summary's word over the source, and don't take a stated correction over the source either — verify independently before writing anything down.

**Heading `text` blocks need an explicit `text_color` setting.** A global `h1, h2, h3, h4, h5, h6 { color: ... }` CSS rule does not reach them — Horizon's generic `text` block always renders a `<div>`/`<p>` regardless of `type_preset`, never a real `<hN>` tag, and our own headings are authored with `type_preset: "custom"`, which carries the literal class `custom`, not `h1`–`h6`. Without an explicit `text_color` on the block itself, it silently inherits the page's body-text colour instead of the heading colour. Confirmed 2026-08-20 while auditing why the planned heading-colour override in `ARCHITECTURE.md` §1 wasn't reaching any content built so far.

**Any custom block that should fill its container needs an explicit `width: 100%` on its own outer div.** Horizon's `group`/`section` flex containers default to `align-items: flex-start` on their content wrapper (`blocks/group.liquid`'s schema default for `horizontal_alignment_flex_direction_column`, applied via `assets/base.css`'s `.layout-panel-flex--column` rule) — a block with no explicit width just shrinks to its own content and sits left instead of filling and centring within it. There's no native "fill" behaviour a block gets for free; it has to opt in itself. Caused three separate bugs this session (quote-panel's background not reaching full width, quote-panel's content sitting left of centre, the wholesale success state sitting left of centre) — all fixed the same way, `width: 100%;` added directly to the block's own outer div. **It's invisible in any state where the block's own content happens to be wide enough to fill the container anyway** (e.g. the wholesale form's own two-column input grid masked the bug entirely — it only showed up once the success state's narrower content replaced the form), so don't treat one state rendering correctly as proof the block is actually filling its container; check the outer div's own CSS.

**Verify any setting change against the rendered page, not the file.** A saved instance value in `templates/*.json` beats a schema `default` in the block/section's own Liquid — editing the default does not touch content that already has an explicit value, so the file can read correctly while the live page still shows the old behaviour. This has bitten the project three times: the "Why Lambruk" eyebrow, header settings, and the Curated Occasions card links (2026-08-24 — all four cards had an explicit `link` instance value equal to the schema default, so the bug was invisible in the JSON and only showed up by clicking through the actual page). Reading the JSON, or reasoning about what the default *should* produce, is not verification — load the page (preview or live) and check the rendered output/behaviour directly.

## Theme IDs

| Theme | ID | Status | Notes |
|---|---|---|---|
| **Horizon** | `182395437357` | unpublished | **Our theme.** All work targets this ID. |
| Flux | `177861689645` | **LIVE** | Being replaced. Never write to it, never copy from it. |
| BACKUP of Flux – 16.9.25 | `177954521389` | unpublished | Client's rollback snapshot. Leave alone. |
| Expanse | `168500887853` | unpublished | Not used. |
| Dawn | — | unpublished | Not used. |

**Never run a `shopify theme` command without an explicit `--theme <id>`.** Without it the CLI wants to prompt interactively, and an agent that cannot answer a prompt will guess — the guess defaults to the live theme. This has already happened once on this project.

**The Shopify Admin MCP connector is permanently unavailable on this project — do not attempt to install, connect, or use one.** Decided 2026-08-20: the user is a collaborator, not the store owner, and the app requests full access to orders, customers, discounts and settings — disproportionate to what a theme build needs, so it's not being requested. (This supersedes an earlier version of this note, from the same day, about confirming the connector's target store before use — a real connector was briefly present that session, pointed at an unrelated store ("Yippy Yayas"), caught before any of its data was used. That connector is gone and won't return; nothing here should be read as "check before using it," only "there isn't one.") **Store data — collection/product handles, template assignments, order/customer data, anything that lives in Admin — comes from the user on request.** Ask rather than guess, query an API that isn't there, or infer from the storefront.

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
- [ ] Footer's Shop-column links (`sections/footer-group.json`) point at `/collections/all` as a placeholder, as does the new Shop CTA on `templates/collection.all.json` — ask the user for the real Tea Collection/Sauces & Chutney/Pantry Staples/Gift Boxes handles (no Admin MCP connector to verify these against — see above).
- [ ] Design's product-card component supports a one-off award badge ("Bronze Medal") on exactly one sample product — not a commerce state (sale/sold-out) Horizon's native badge logic can drive. Skipped for now, one product doesn't justify a mechanism (2026-08-20). Possible later feature: a merchant-editable award/achievement badge, likely metafield-driven, if more products end up needing one.
- [ ] **Where should wholesale enquiries actually go? Not a theme decision — flagging before it becomes a launch-day surprise.** The new Wholesale page's "Apply for a commercial account" form (2026-08-20) uses Shopify's native contact-form mechanism, which sends to whatever single address is configured in Admin under Settings → Notifications → Contact form recipient. That's the same inbox general customer-service enquiries go to. Wholesale applications likely need to reach a different person/team (sales, or whoever handles trade accounts) — worth deciding before go-live whether that's a separate recipient, a shared inbox with routing, or intentionally the same address. No theme-side fix changes this; it's an Admin/process decision.
- [ ] **Homepage Reviews section not built.** The design's "Loved at country tables" section (customer reviews + rating summary) needs a reviews app — none is installed (Apps list above only has Instant AI Page Builder, EZ Importer, Messaging). The design's own copy admits this is a placeholder ("Reviews powered by Judge.me. Sample content shown until the store is connected"). Decide whether to install one, and which, before this section can be built for real (2026-08-21).
- [x] **Homepage "Curated for every occasion" links to real collections.** All four cards (Slow Mornings, Entertaining, Sunday Roast, High Tea) now point at their matching `/collections/<handle>` — confirmed those collections exist and each card was click-verified on the rendered page (2026-08-24). The block (`blocks/lambruk-occasion-card.liquid`) no longer has a `link` default — a newly added card with no link set renders with an empty `href` instead of silently pointing at Shop All, so future unconfigured cards are visibly broken rather than invisibly wrong.
- [ ] **Homepage "Top Sellers" rail (formerly "Seasonal Spotlight") has no collection assigned.** Rebuilt 2026-08-21 to source from Shopify's sales data instead of a manual list — but Horizon's `product-list` section has no sort setting of its own, so "best-selling" only works via the *bound collection's own* Admin sort order. Decision: use a **separate, dedicated collection** (not Shop All, to avoid changing Shop All's own default browsing order sitewide) — needs to be created, set to Sort: Best Selling in Admin, and assigned to `section_top_sellers`'s `collection` setting in the theme editor. Left blank rather than guessed. Also worth knowing: Shopify's "best selling" is all-time order count, not a rolling window, and falls back to newest-to-oldest if a collection has no sales yet — whether current order volume is enough for a meaningful order is the client's call, not verifiable from the theme side.
- [ ] **Homepage images not yet assigned**: hero cheeseboard photo, hero award badge overlay, "The Lambruk Promise" quote panel illustration, and all 4 Curated Occasion card photos — no confirmed Shopify Files reference existed for any of these, so each was left unassigned rather than guessed at a filename. Needs real assets uploaded and assigned in the theme editor (2026-08-21).
