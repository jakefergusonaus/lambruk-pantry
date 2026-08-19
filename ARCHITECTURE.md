# Architecture decisions — Lambruk Pantry on Horizon

A decision record for how `design/DESIGN-TOKENS.md` maps onto this Horizon build. Written after confirming Horizon uses one global colour **palette** (not per-section colour **schemes** — verified: no `"type": "color_scheme"` setting exists anywhere in `sections/`, `blocks/`, or `config/settings_schema.json`) and after reading `config/settings_schema.json`, `assets/base.css`, and the `snippets/` that actually emit Horizon's CSS custom properties.

This record exists so the reasoning survives past this session — each decision below states what we're doing, why, and what evidence from the theme source drove it. **No theme file has been changed as part of writing this record.** It is the plan; implementation is separate work.

---

## 1. Colour: palette + a single heading override + an explicit muted token

**Decision**
- `page_background_color` → `--paper` (`#FBFAF7`)
- `page_text_color` → `--text-body` (`#4A5478`)
- One CSS rule overrides `h1`–`h6` to `--text-strong` (`#131A3E`)
- `--text-muted` becomes our own explicit custom property (`#686D84`), not Horizon's derived opacity-fade
- `--color-border` gets overridden globally to our gold hairline, with a specific fix for product cards (see below)

**Why global foreground = body colour, not heading colour**
Horizon has exactly one foreground role. `body { color: var(--color-foreground) }` in `color-palette.liquid`, and nothing in `base.css` gives headings an independent colour — they simply inherit. Since body copy vastly outnumbers headings on every page, setting the global foreground to `--text-body` and overriding the minority (headings) is less code than the reverse.

```css
/* new stylesheet, loaded after Horizon's own CSS */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-strong);
}
```

One rule. It rides on top of whatever `page_text_color` is set to without touching `color-palette.liquid`.

**Why `--text-muted` needs to be a real second colour, not Horizon's fade**
Horizon's "muted" text isn't a colour — it's `rgb(var(--color-foreground-rgb) / 0.6)` (`--opacity-muted-text: 0.6` in `theme-styles-variables.liquid`). If foreground is `#4A5478`, a 60%-opacity fade of it is **not guaranteed to equal our approved `#686D84`**, and it's mechanically translucent rather than solid — it'll shift with whatever sits behind it (a photo, a navy band), which our contrast-checked, solid `#686D84` was specifically chosen to avoid. So:

```css
:root {
  --text-muted: #686D84;
}
```
...used directly wherever our own components need muted text, instead of Horizon's `--color-foreground-muted`.

**What `--color-border` inheriting foreground actually does — checked, not assumed**
`--color-border: {{ settings.page_text_color }}` in `color-palette.liquid` — so once foreground is `#4A5478`, `--color-border` becomes that colour too. Grepping every consumer:

- `accordion-styles.liquid`, `header-drawer.liquid`, `buy-buttons-styles.liquid`, `template-giftcard.css`, `search-modal.liquid`, `predictive-search-styles.liquid` all use it **solid** — `border: 1px solid var(--color-border)`. With foreground at `#4A5478`, every one of these hairlines renders solid blue-grey, not our warm gold `#E3D6C5`.
- `divider.liquid` already supports a per-instance override (`settings.divider_color`, falling back to `--color-border`) — useful precedent for point 2 below.
- `product-grid.liquid:225` — the actual **product card border** — reads `rgb(var(--color-border-rgb) / var(--product-card-border-opacity))`. Grepped for `--product-card-border-width` and `--product-card-border-opacity` everywhere else in the theme: **they are defined nowhere.** An undefined custom property with no fallback makes the whole `border` declaration invalid at computed-value time, so **product cards currently render with no border at all** — not "the wrong colour," genuinely absent. This was a surprise; worth knowing before assuming the card border "just needs a colour fix."

**Decision from that finding:** override `--color-border` globally to `#E3D6C5` (fixes every solid-consumer above in one shot), and *separately* define `--product-card-border-width: 1px` and `--product-card-border-opacity: 1` in the new stylesheet to activate the currently-dormant product-card border feature. Two small additions, not a rewrite of `product-grid.liquid`.

---

## 2. Surfaces: native `background_color` + `contrast-override`, not a CSS layer

**Decision:** every new theme block that needs a non-default surface (paper-2, navy, etc.) gets its own `background_color` block setting, defaulting to the correct surface hex, following the pattern already used by `blocks/_card.liquid` — not a blanket CSS class system we invent.

**The existing pattern, as found in `blocks/_card.liquid`:**
```liquid
{% liquid
  if block_settings.background_color != blank
    render 'contrast-override', background_color: block_settings.background_color, section_id: block.id
  endif
%}
<div class="card{% if block_settings.background_color != blank %} color-custom-{{ block.id }}{% endif %}">
```
```json
{ "type": "color", "id": "background_color", "label": "t:settings.background_color", "placeholder": "t:settings.default" }
```
`_card.liquid` leaves the setting blank by default (inherits the ambient page background) and only engages `contrast-override` — which auto-picks a readable text colour from the palette extremes — when a merchant explicitly sets one.

**Worked example — one block, before applying this broadly**

Our navy quote panels (`Promise.jsx` / `WhyLambruk.jsx` — `--surface-dark`, `--text-on-dark`, gold eyebrow) are the surface furthest from Horizon's light default, so they're the clearest test of the pattern. Two things differ deliberately from `_card.liquid`'s convention:

1. **We give the setting a real default**, not a blank placeholder — this block's identity *is* navy; a merchant clearing the field shouldn't silently fall back to white.
2. **We pass explicit `text_color`/`accent_color`, not just a background.** `contrast-override`'s own doc comment says it *skips smart contrast entirely* when `text_color` is provided — meaning Horizon already has a first-class path for "don't guess, use this exact colour," not just auto-contrast. We use it, because "readable" isn't the bar — matching our approved gold-on-navy pairing is.

```json
{
  "type": "color",
  "id": "background_color",
  "label": "t:settings.background_color",
  "default": "#131A3E"
},
{
  "type": "color",
  "id": "text_color",
  "label": "t:settings.text_color",
  "default": "#F7F5F2"
},
{
  "type": "color",
  "id": "accent_color",
  "label": "t:settings.accent_color",
  "default": "#C6A06C"
}
```

```liquid
{% liquid
  render 'contrast-override',
    background_color: block_settings.background_color,
    text_color: block_settings.text_color,
    border_color: block_settings.accent_color,
    section_id: block.id
%}
<div class="quote-panel color-custom-{{ block.id }}">
  <p class="quote-panel__eyebrow" style="color: {{ block_settings.accent_color }}">{{ block_settings.eyebrow }}</p>
  <p class="quote-panel__text">{{ block_settings.text }}</p>
</div>
```

A merchant gets a real colour picker per instance (on-brand default, override allowed), `contrast-override` still emits the standard `--color-foreground`/`--color-border` variables scoped to `.color-custom-{{ block.id }}` for any child markup that doesn't set its own colour explicitly, and none of it required a bespoke CSS class system. This is the pattern for `paper-2` band sections, the alt-paper category tiles, and any other non-default surface — each gets its own `background_color` (+ `text_color`/`accent_color` where the surface isn't just light-on-light) with our surface's hex as the default.

Once this one example is confirmed to look right in the editor, apply the same shape to the other surfaces before building further sections against it.

---

## 3. Accept Horizon's values where close

Three deliberate concessions, recorded with reasoning in `design/DESIGN-TOKENS.md` at their respective sections (§2, §8, §9) as well as here:

| Ours | Horizon's | Gap | Accepted because |
|---|---|---|---|
| 720px breakpoint | **750px** (`base.css`, hardcoded) | 30px | Imperceptible in practice; matching it would mean editing Horizon's own CSS for zero visible gain. |
| 20px mobile gutter | **16px** (`--page-margin` below 750px, hardcoded) | 4px | Below the threshold most people notice in a side margin; it's the one mobile spacing value Horizon ships for free — overriding it means touching `base.css` directly for a 4px difference. |
| Display 5 · Card at 26px | **24px** (`type_size_h5` nearest fixed option) | 2px | Not visually distinguishable on a card-caption-scale heading; every step expressible as a plain setting is one less custom rule to carry across future Horizon updates. |

The common thread: each gap is small enough to be invisible or near-invisible, and closing it would require editing a Horizon-owned file (`base.css`) rather than adding to ours. Per the customisation hierarchy in `CLAUDE.md`, that's exactly the trade the hierarchy asks us to make — settings and CSS additions first, Horizon's own files last resort, and these three don't clear the bar for "last resort."

**Not a template for every gap.** The 200px difference between our `--container` (1240px) and Horizon's nearest `page_width` option (`narrow` = 1440px) is *not* being accepted the same way — see §5.

---

## 4. Motion: our own tokens, scoped to our own components — Horizon's spring system untouched

**Decision:** do not override `--hover-transition-duration`, `--ease-out-quad`, `--ease-out-cubic`, or any `--spring-d*-b0-duration` variable. Define our own timing tokens and apply them only inside CSS we write for our own blocks/sections.

```css
:root {
  --lambruk-dur-fast: 140ms;
  --lambruk-dur-base: 240ms;
  --lambruk-dur-slow: 420ms;
  --lambruk-ease-out: cubic-bezier(.22, .61, .36, 1);
}

/* used only within our own component selectors, e.g.: */
.quote-panel__eyebrow { transition: color var(--lambruk-dur-fast) var(--lambruk-ease-out); }
```

**Why not just override Horizon's variables globally:** Horizon's animation system is partly spring-physics-based — `--spring-d220-b0-duration` etc. name a duration *and* a bounce coefficient as a matched pair, tuned for specific motion curves. Swapping the duration alone (via a blanket variable override) would desync it from the bounce it was tuned against, producing motion that's neither our calm/editorial curve nor Horizon's intended spring — worse than either. Our components get our exact motion; Horizon's own interactions (drawers, quick-add, page transitions) keep behaving as Horizon intended.

---

## 5. Everything else: one new stylesheet, layered over Horizon — never edits to Horizon's files

Every remaining Category 3 item from the settings-mapping review becomes a CSS custom property in a **single new asset** (`assets/lambruk-tokens.css`), loaded after Horizon's own CSS via `snippets/stylesheets.liquid` — not a direct edit to `layout/theme.liquid`, which never references stylesheets itself. One file, with clearly marked TOKENS and UTILITIES sections rather than splitting custom properties and classes across two assets, to avoid a second global request. Nothing here edits `base.css` or any other Horizon-owned snippet other than the one line noted in "Upgrade-tracked modifications" below.

Confirmed contents so far:

- `--text-muted: #686D84` (§1)
- `--color-border` override to `#E3D6C5`, plus `--product-card-border-width`/`--product-card-border-opacity` to activate the dormant card border (§1)
- `--lambruk-dur-fast/base/slow`, `--lambruk-ease-out` (§4)
- `--section-y: 96px`, `--measure-prose: 820px` — no Horizon setting exists for either; theme-level, not per-block, since Horizon's own vertical rhythm is controlled per-section rather than globally
- `--container: 1240px` — Horizon's `page_width` options (1440/1920/2400px) are too far from our value to accept as a concession the way §3's gaps were; this needs an explicit override on our section wrappers (`max-width` set directly, not relying on `page-width-*` classes) rather than picking the nearest native option
- `--shadow-whisper`, `--shadow-card`, `--shadow-lift` — no product/content-card shadow setting exists in Horizon at all (only `card_hover_effect`, a transform, and drawer/popover shadows elsewhere); these become pure CSS, applied via our own card component styles
- `--icon-accent: #8A6A32` (recorded in the now-archived `design/_archive/Lambruk Pantry Design System/tokens/colors.css` and reconfirmed against `design/design_handoff_website/` on 2026-08-20 — needs the equivalent added to the theme's own new stylesheet when icons are built)
- Hero/card image-protection scrims (the two `linear-gradient()`s from `DESIGN-TOKENS.md` §1) — no native equivalent, straight CSS

**Still open, deliberately not decided here:**
- Custom font upload for Instrument Serif and Geist — `font_picker` settings support uploading a custom font through the theme editor, which would be the native path, but that's an Admin action, not something resolvable from source. The font files are staged locally (`~/Downloads/Geist/`) and ready whenever that step happens; Instrument Serif isn't yet confirmed staged the same way.
- Focus-ring colour — no dedicated setting found beyond the button-specific `--color-primary-button-focus-outline`; needs a decision once we're building actual interactive components, not before.
- **Quote-panel illustration placement doesn't match the source.** `design/design_handoff_website/` adds `&nbsp;` directly before each inline illustration in the quote text ("Made with real fruit&nbsp;<img>...") — confirmed on both the Promise and Why Lambruk bands, desktop and mobile. That `&nbsp;` only makes sense if the illustration sits *inside* the sentence, glued to the preceding word, not trailing the whole quote as a separate element. Our current `quote-panel.liquid` renders one optional illustration *after* the full quote (see this session's earlier work) — a deliberate simplification at the time, reasoned as the closest achievable equivalent given richtext can't target an arbitrary word. This new evidence says that reasoning needs revisiting, not just accepting as a known gap: either richtext needs real inline-image support (a bigger lift — Shopify's richtext setting doesn't support arbitrary inline `<img>` insertion natively) or the block's shape needs to change (e.g. separate text-segment settings around each illustration, matching the source's fixed insertion points, at the cost of merchant flexibility). Needs a decision before quote-panel is considered done.

---

## 6. Upgrade-tracked modifications

Horizon-owned files we've had to touch directly, rather than layer over. Each entry is a real upgrade burden: a future Horizon theme update can silently overwrite these and drop whatever we depended on, with no error — CSS custom properties that go missing just fall back to unset/initial rather than failing loudly. Check this list after every Horizon update.

| File | Change | Risk | What to check after a Horizon update |
|---|---|---|---|
| `snippets/stylesheets.liquid` | Added one line loading `assets/lambruk-tokens.css`, after the existing `base.css` line | A Horizon update can replace this file wholesale, silently dropping our line — every block depending on `--display-*` tokens or `.text-display-*` utilities would lose their sizing with no visible error, just Horizon's own fallback values re-asserting themselves | Confirm the `lambruk-tokens.css` line is still present; re-add if the update overwrote it |
| `sections/footer-utilities.liquid` | Added two entries to the section's `"blocks"` allowlist — see below | A Horizon update to this file's block list would either silently drop our two entries (if it replaces the array wholesale) or conflict cleanly (if it's a structural merge) — the footer's legal bar would fall back to Horizon's native `footer-copyright`/`footer-policy-list` with no visible error, just the wrong content/shape | Confirm `lambruk-copyright` and `lambruk-policy-links` are still present in the `"blocks"` array; re-add if the update overwrote them |

**`footer-utilities.liquid`'s `"blocks"` array — pristine vs. current.** This is a closed allowlist of block *types* the section accepts, separate from and in addition to its `max_blocks: 3` count limit (see the QA note in §7 below on why neither surfaced through `theme check`). Neither the type restriction nor a way to add to it exists at a lower layer of the customisation hierarchy — a new block (layer 3) is the correct place for new footer content, but it still has to be named in this array before Horizon's own `footer-utilities.liquid` will accept it, which makes this a minimal, deliberate layer-4 edit rather than a full section override (the array is the only thing touched; the section's grid/layout/rendering logic is untouched).

Pristine (confirmed against `git show b2d7c4b:sections/footer-utilities.liquid` — **not** `8df8a53`, which predates the Horizon theme files entirely; `b2d7c4b` "Add pristine Horizon theme baseline" is the actual baseline commit for diffing):
```json
"blocks": [
  { "type": "footer-copyright" },
  { "type": "footer-policy-list" },
  { "type": "social-links" }
],
```
Current — purely additive, the three original entries untouched, two new ones appended:
```json
"blocks": [
  { "type": "footer-copyright" },
  { "type": "footer-policy-list" },
  { "type": "social-links" },
  { "type": "lambruk-copyright" },
  { "type": "lambruk-policy-links" }
],
```
Both new types are `lambruk-`-prefixed deliberately, so anyone diffing this array against a future Horizon update can immediately see which entries are ours without cross-referencing this table. `footer-copyright` and `footer-policy-list` are left in the allowlist unused — removing them wasn't necessary to fit our content and would have turned this into a mixed add/remove diff instead of a clean, purely-additive one.

---

## 7. Verification gap: `theme check` doesn't validate JSON against a section's own schema

Found 2026-08-20 when three edits to `sections/header-group.json`, `sections/footer-group.json`, and `templates/404.json` all passed `shopify theme check` clean, then were rejected outright on real upload to theme `182395437357` (surfaced via the local preview at `127.0.0.1:9292`, then reproduced independently against a second `shopify theme dev` session):

- `footer_utilities_jLGE8U` had 4 blocks against `footer-utilities.liquid`'s declared `"max_blocks": 3`.
- `header-group.json`'s `"order"` array referenced a section id no longer present in `"sections"` — a leftover from a prior edit.
- `templates/404.json` set `padding-block-start`/`padding-block-end` past `main-404.liquid`'s declared range `max: 100`.
- Two more of the same shape, only visible after re-verifying against the live theme rather than trusting a clean sync log: `divider_color`/`background_color_top` used `rgba(…, .28)` / `rgba(…, .92)` — Shopify's colour-setting validator rejects a decimal with no leading zero (`0.28`, not `.28`), even though it's valid CSS a browser parses fine.

**Why `theme check` missed all five.** Checked its rule list (`shopify theme check --list`) — the closest candidates are `ValidSchema`, `ValidSettingsKey`, and `JSONMissingBlock`. What they actually validate: that a section's *own* `{% schema %}` block is syntactically well-formed, that setting IDs referenced in Liquid exist in that schema, and that a JSON template's block *types* are valid. None of them cross-reference **instance data** in a template or section-group JSON file (`sections/header-group.json`, `sections/footer-group.json`, `templates/404.json`, `config/settings_data.json`) against the *runtime constraints* declared in the section/block schema it's instantiating — `max_blocks`, a setting's `min`/`max` range, or platform-level value-format rules like valid CSS colour syntax. `theme check` lints Liquid and JSON *structure*; it doesn't simulate what Shopify's own admin-side schema validator does when a theme is actually synced. That validator is authoritative for this whole error class, and nothing local reproduces it.

**The check that would have caught it: an actual sync.** `shopify theme dev --theme 182395437357` (or `theme push` to the same, unpublished, theme) performs the real server-side validation on every file it uploads — that's literally how these five were found. There is no local, offline equivalent; the checks that matter here only exist on Shopify's side.

**Practice change.** `shopify theme check` remains necessary (it catches things a live sync doesn't — translations, deprecated tags, accessibility) but is no longer sufficient on its own for changes to section-group JSON (`header-group.json`, `footer-group.json`), template JSON, or any settings touching schema-declared ranges/max_blocks/colour values. Those changes need a real sync — `shopify theme dev` running, or a one-off `theme push` — checked for upload errors before considering the change done, not just a clean `theme check` run. Worth folding into the `/qa` skill and `workflow/PIPELINE.md` directly rather than relying on this note being remembered per-session.

---

## 8. `.theme-check.yml`: `MatchingTranslations` disabled deliberately

Lambruk Pantry is English-only. Horizon ships 21 other locale files (`ar`, `de`, `fr`, … — stock translations of Horizon's *default* strings, never authored or maintained by us) alongside `en.default(.schema).json`. `MatchingTranslations` requires every key in the English default files to also exist in all 21 others. Every key we add — including every `lambruk_*` setting from this session's footer work — permanently fails this check across ~21 files with no actual bug behind it: by the time footer work finished, this had inflated `theme check` to 352 errors, all of them this one check, none of them real.

**Considered, not chosen: deleting the 21 unused locale files instead.** Would solve the same noise problem (nothing left to mismatch against) and more thoroughly, but is a real deletion — recoverable via git history since they're tracked from the pristine Horizon baseline, but not a config toggle — and throws away Shopify's own maintained translations of Horizon's *stock* strings as a starting point, if the client ever wants a second storefront language later. The `.theme-check.yml` override is smaller, fully reversible, and the standard idiom for English-only Shopify builds — chosen over the deletion for that reason, not because the tradeoff is one-sided.

**`ValidSchemaTranslations` stays on, deliberately, and must not be disabled alongside this.** It's a different check — it validates that every `t:` reference in a block/section schema resolves to a real key in `en.default.schema.json`, which catches an actual bug class (a typo'd locale key). Nothing about the `MatchingTranslations` override affects it; confirmed separately that it's still active after the override was added. If `theme check` ever needs touching again here, disable only `MatchingTranslations` — don't reach for `theme-check:all`'s translation category as a whole.

---

## 9. Design-system type on generic blocks: `font_size: var(--display-N-size)`

Every section built from Horizon's generic `text` block (the composable pattern §5 and the media-with-content work both lean on) needs headings sized to our canonical scale, not Horizon's own `type_size_h1`–`h6` settings — those are a different, uncoordinated scale (see quote-panel's original h3 problem: flat 32px, no fluid step, because Horizon's own fluid algorithm only activates above a 48px cutoff). Rather than solve this per-section, or build a bespoke block every time a heading needs correct sizing, the fix is one setting value.

**The technique:** on a `text` block, set `type_preset: "custom"` and `font_size: "var(--display-N-size)"` (or any raw CSS value, including a literal `clamp(...)` string) instead of one of the schema's enumerated px options.

**Why this works, confirmed empirically, not just by reading the code — this session already had two cases where static reasoning missed a real server-side validation rule (`max_blocks` type allowlist, the `rgba()` leading-zero requirement), so this was tested against a live sync before relying on it:**
- `font_size` is declared as a `select` in `text.liquid`'s schema, with a fixed list of px options — but that only constrains the theme-editor's dropdown UI. Confirmed the platform's schema validator does **not** reject a value outside that list when set directly in JSON, unlike `range`/`color`/`url` settings (both of which we've hit real rejections on this session).
- `snippets/typography-style.liquid` tries to parse `settings.font_size` as a bare rem number (`split: 'rem' | first | times: 1.0`) to decide whether to build its own clamp. That parse fails silently on a non-numeric string like `"var(--display-3-size)"`, evaluates to `0`, falls under the fluid cutoff, and hits the plain `else` branch — which just echoes the raw setting value into `--font-size:` verbatim. A test block set this way and synced to the live theme measured **40px at desktop, 32px at mobile (375px)** — genuinely fluid, not a coincidence at one viewport.

**The caveat: `line-height` does not get the same free ride, and this is deliberate, not an oversight to fix reflexively.** Unlike `font_size`'s passthrough, `typography-style.liquid` builds `--line-height` by *string-interpolating* your selection into a fixed variable name — `--line-height--{type}-{tight|normal|loose}` — never a raw echo. `type` here is inferred from the same (failed) font-size parse, defaulting to `body`, so a heading set this way gets `--line-height--body-normal` (1.4) rather than Display 3's actual 1.08. Visually looser than intended on any heading that wraps to multiple lines; a non-issue on ones that don't. Left unsolved deliberately on the five `media-with-content` headings (2026-08-20) — pending a look at the real preview, since which headings wrap and which don't determines whether this is even worth solving, not something to fix pre-emptively.

**Adopt this as the standard.** Any generic `text` block needing correct heading size going forward should use `font_size: var(--display-N-size)` rather than Horizon's native presets or a fixed px value — solved once, here, rather than re-decided per section.

---

## Summary

| Area | Path taken |
|---|---|
| Global fg/bg | Native `page_text_color`/`page_background_color` |
| Heading colour | One CSS override rule |
| Muted text | Explicit custom property, not Horizon's opacity fade |
| Hairlines | `--color-border` override + activating the dormant product-card border |
| Surfaces (paper-2, navy, etc.) | Native `background_color` (+ `text_color`/`accent_color`) per block, `contrast-override`-driven — demonstrated on one block above |
| Breakpoint, mobile gutter, Display 5 | Accepted Horizon's native values (§3) |
| Motion | Separate tokens, scoped to our components only |
| Container, shadows, section rhythm, scrims, icon accent | New layered stylesheet, additive only |

Next step, on approval: build the one worked block from §2 for real and confirm it renders as expected in the theme editor before extending the pattern to the rest of the surface list.

---

## Open questions

- **Site and product photography is an outstanding client dependency, not a build task.** Confirmed 2026-08-20: only the logo (`Lambruk_Logo_Horizontal.svg` / `Lambruk_Logo_Horizontal_white.svg`) and the ten brand illustration icons (`Lambruk-Illustration[.png / -1 through -9.png]`) are uploaded to Shopify Files. None of the five `media-with-content` band photos (cafe, high tea, wholesale, story) exist yet — those slots are deliberately left on Horizon's placeholder graphic (`media_type: "image"` with no `image` value set) rather than pointed at a filename that doesn't exist. **Full visual QA against the design package is blocked on this arriving** — none of the five media-with-content bands, nor any future section needing real site/product photography, can be judged against the actual design intent until real images are uploaded and these settings are populated for real.
