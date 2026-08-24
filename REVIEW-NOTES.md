# Review notes

Running list of visual tweaks spotted during review. Add to this as you go — we'll work through entries in batches rather than one at a time.

Mark an entry `[x]` once it's fixed.

| Done | Page | Element | What's wrong | What it should be |
|---|---|---|---|---|
| [ ] | Shop grid (collection pages), mobile | Product card | Collapsed to the same responsive card used on desktop (1:1 image → 4:3, 10px radius → 16px, sans title → serif, floating pill quick-add → none) for now. **Different from the other two mobile gaps found this build** — those were absences (nothing there at all); this is a fully specified alternative design in the source, right down to a deliberate-looking floating pill quick-add button overlaid on the image. Needs judging on a real phone before calling it settled, not assumed to be an oversight like the others. |
| [x] | Header (sitewide) | Main nav | **Not a bug — design-source gap.** Current-page and hover states built for the main nav (both `#131A3E`, aria-current-driven) have no basis in `LambrukPantry Desktop.dc.html`, which specifies no nav interaction states at all. Design source needs updating to show these states so they're not invisible to the next person reading it. See `DESIGN-TOKENS.md` #10. |
