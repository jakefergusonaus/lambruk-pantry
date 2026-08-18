# Phase 4 — Incremental Liquid Build

Build in small, validated groups.

## Required loop

For each section, block, snippet, template, layout, locale, config, asset, or behavior group:

1. Search current official Shopify documentation for unexercised Liquid/theme
   features; reuse proven local patterns without repeating discovery.
2. Inspect adjacent base-theme files and reuse native primitives and conventions.
3. Implement semantic server-rendered markup first; add progressive JavaScript only where needed.
4. Use Shopify objects, routes, forms, filters, image APIs, money formatting and translations rather than duplicating platform behavior.
5. Add schema settings, blocks and presets only for genuine merchant content
   management or composition requirements.
6. Preserve `@app` compatibility where required.
7. Validate every changed Liquid/JSON theme file with the current Shopify Liquid validator.
8. Run Theme Check and fix new issues.
9. Preview with real store data. Update `WORKFLOW_STATE.md` once per meaningful
   full-pipeline group, not after every edit.

Never paste React/Tailwind returned by Figma or prototype HTML unchanged. Adapt design intent into the selected theme's Liquid architecture.
