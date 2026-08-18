# Shopify theme architecture profile

This harness works with Horizon, Dawn and other Shopify Online Store themes.
The active theme is a framework: inspect its source and rendered runtime before
changing its contracts.

## Preserve before replacing

Inventory and preserve the theme's product forms, variants, pricing, inventory,
selling plans, cart, search, filters, localisation, customer accounts, app
blocks, analytics, metafields, metaobjects and editor behaviour. Extend native
primitives where they already work.

## Theme architecture

- JSON templates compose sections.
- Sections own page-level modules and editor settings.
- Theme blocks are useful for genuinely repeatable merchant composition.
- Snippets share rendering logic without creating editor controls.
- Assets hold the CSS and JavaScript required by the implementation.
- Theme settings and colour schemes remain the global theming system.

Do not bolt on a competing CSS framework or parallel token system unless the
project explicitly requires one and accepts the migration cost.

## Merchant configurability

Expose a setting, block or custom-data field when a merchant is genuinely
expected to change the content without code, when content varies by resource or
campaign, or when repeatable composition is required.

Keep stable layout mechanics, decorative implementation details and bespoke
visual structure in code unless configurability is requested. Never hardcode
catalogue resources, prices, variants or inventory.

## Runtime inspection

Liquid source does not prove the final DOM. Before behavioural or visual
overrides, inspect rendered selectors, generated IDs, computed properties,
scroll containers, events and interaction states. Prefer stable hooks and
narrow overrides over assumptions about theme internals.

## Progressive enhancement

Prefer server-rendered Liquid and semantic HTML. Add JavaScript only for
behaviour that requires it, preserve no-JavaScript fallbacks where practical,
support reduced motion and avoid replacing native commerce code for visual
convenience.
