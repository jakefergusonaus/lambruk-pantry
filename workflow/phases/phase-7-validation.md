# Phase 7 — Static Validation

Run validation from the confirmed theme root.

## Required checks

- Current Shopify Liquid validator for each created/changed theme file
- `shopify theme check`
- Liquid syntax, supported objects/tags/filters and LiquidDoc
- Section and theme-block schema JSON
- JSON templates and referenced section/block types
- `settings_schema.json` and settings references
- Locale JSON and translation-key coverage
- Required `content_for_header` and `content_for_layout`
- CSS/JavaScript syntax and missing assets

Do not disable a check solely to make the run green. Fix the cause or document
a narrowly justified exception. Separate new/changed-file findings from
pre-existing findings. This phase proves static/code validity only; selectors,
layout and behaviour require rendered checks.
