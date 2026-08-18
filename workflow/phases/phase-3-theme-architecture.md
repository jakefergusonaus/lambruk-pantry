# Phase 3 — Shopify Theme Architecture

Map design intent onto the selected base theme rather than rebuilding Shopify primitives from scratch.

## Mapping rules

- JSON templates compose sections for page types.
- Sections provide merchant-configurable page modules.
- Theme blocks provide reusable, nestable, merchant-composable elements when the base supports them.
- Section blocks remain local to a section when cross-section reuse is unnecessary.
- Snippets contain reusable rendering logic with explicit parameters and LiquidDoc where required.
- Settings configure choices a merchant is genuinely expected to change
  without code; global choices belong in theme settings.
- Locales own user-facing theme strings.
- Existing assets/utilities/events should be reused when their contract is sound.

Treat every selected base theme as a framework. Preserve its server-rendered,
progressive-enhancement, product/cart and event contracts unless the user
approves a migration. Inspect the rendered runtime rather than assuming one
theme's DOM or block model applies to another.

For every mapped element, record:

- Source reference
- Shopify file/type
- Shopify resource or setting source
- Editability behavior
- Responsive states
- Preserved dependencies and app/custom-data hooks
- Acceptance criteria

Save `SHOPIFY_THEME_MAP.md` before implementation.
