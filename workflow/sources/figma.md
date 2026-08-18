# Figma Source Adapter

- Require view access and prefer node-specific URLs.
- Load the host's current Figma design-to-code guidance before design-context calls.
- Retrieve design context for every implemented section; use metadata only for orientation.
- Use screenshots for visual intent and validation, not as a substitute for structured context.
- Download exact expiring assets into the theme's appropriate assets workflow; never redraw icons/images from memory.
- Record node/file references and authored viewports in `DESIGN_SOURCE_MANIFEST.md` and `SHOPIFY_THEME_MAP.md`.
- Treat returned React/Tailwind as reference material, not Shopify code.
