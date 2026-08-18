# Phase 1 — Store and Theme Inventory

## Local inspection

- Locate `layout/`, `templates/`, `sections/`, `blocks/`, `snippets/`, `assets/`, `config/`, and `locales/`.
- Check Git status and preserve unrelated work.
- Identify the base theme and version clues without guessing.
- Inspect `settings_schema.json`, `settings_data.json`, templates, section groups, theme blocks, app blocks, JavaScript events, CSS architecture, translations, and custom-data access.

## Remote inspection

Use current Shopify CLI discovery and read-only theme commands to confirm:

- CLI version
- Connected store
- Remote theme list
- Exact theme ID, name, and status

Do not pull merely because a remote exists. When the user already pulled the theme, treat local files as the working copy and record their claimed remote origin.

Before a required pull, ensure the destination is clean or backed up, show the exact store/theme/path, explain that local files may be overwritten, and obtain confirmation.

## Preservation inventory

Record:

- Template/page types
- Product form, variant, pricing, selling-plan and pickup behavior
- Search, filter, sort, cart and customer-account behavior
- Markets, currencies, languages and locale coverage
- Apps, app blocks, embeds, analytics and event contracts
- Metafield/metaobject reads and dynamic sources
- Merchant settings and section/block configurations

Save `STORE_THEME_INVENTORY.md` and `PRESERVATION_CHECKLIST.md` before changing theme files.
