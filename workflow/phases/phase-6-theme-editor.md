# Phase 6 — Theme Editor and Content Model

Expose merchant controls when content is expected to change without code,
varies by resource or campaign, or requires repeatable composition. Do not
expose stable layout mechanics or decorative implementation details by default.

Check that:

- Sections have clear names, presets and narrowly useful settings.
- Repeated items use blocks; cross-section/nested composition uses theme blocks when supported.
- Blocks expose `shopify_attributes` required for editor selection and reordering.
- Product, collection, page, blog, article, menu, image, video and metaobject choices use native resource settings where appropriate.
- Dynamic sources can connect to relevant settings.
- Global colors, typography, layout and style choices are not redundantly recreated per section.
- Existing app blocks remain addable in required sections.
- AI-generated theme blocks remain supported where intentionally allowed by the base architecture.
- Defaults and presets create a usable result without hardcoding catalogue
  content into code.

Test adding, removing, reordering, duplicating and editing representative sections/blocks in the actual theme editor. Record blocked editor checks rather than assuming they work.
