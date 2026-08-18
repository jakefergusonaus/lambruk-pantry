# Phase 8 — Visual and Responsive QA

Use the Shopify development or confirmed unpublished preview with real store data.

For each mapped page/state:

1. Capture the source reference at a known viewport.
2. Capture the rendered theme at the same viewport.
3. Compare hierarchy, bounds, spacing, typography, color, borders, media crop, content order, controls and states.
4. Inspect console errors, failed requests, broken assets, hydration/progressive-enhancement failures and horizontal overflow.
5. Verify the source viewport plus representative desktop, tablet and mobile
   widths (use 1440, 768 and 390 when the sources provide no better targets).
6. Exercise focus, hover, active, open, empty, error and loading states visible or required by the design.
7. Fix and recapture until accepted or a documented blocker remains.

Inspect computed styles and actual runtime selectors rather than inferred IDs,
scroll containers or CSS variables. Screenshots alone cannot reveal commerce
behaviour; continue to Phase 9. Source-code inspection alone cannot pass
runtime or visual QA.
