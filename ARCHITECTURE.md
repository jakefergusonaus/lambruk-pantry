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

Every remaining Category 3 item from the settings-mapping review becomes a CSS custom property in a **single new asset** (e.g. `assets/lambruk-tokens.css`), loaded after Horizon's own CSS in `theme.liquid`. Nothing here edits `base.css` or any Horizon-owned snippet.

Confirmed contents so far:

- `--text-muted: #686D84` (§1)
- `--color-border` override to `#E3D6C5`, plus `--product-card-border-width`/`--product-card-border-opacity` to activate the dormant card border (§1)
- `--lambruk-dur-fast/base/slow`, `--lambruk-ease-out` (§4)
- `--section-y: 96px`, `--measure-prose: 820px` — no Horizon setting exists for either; theme-level, not per-block, since Horizon's own vertical rhythm is controlled per-section rather than globally
- `--container: 1240px` — Horizon's `page_width` options (1440/1920/2400px) are too far from our value to accept as a concession the way §3's gaps were; this needs an explicit override on our section wrappers (`max-width` set directly, not relying on `page-width-*` classes) rather than picking the nearest native option
- `--shadow-whisper`, `--shadow-card`, `--shadow-lift` — no product/content-card shadow setting exists in Horizon at all (only `card_hover_effect`, a transform, and drawer/popover shadows elsewhere); these become pure CSS, applied via our own card component styles
- `--icon-accent: #8A6A32` (already added to `design/Lambruk Pantry Design System/tokens/colors.css` — needs the equivalent added to the theme's own new stylesheet when icons are built)
- Hero/card image-protection scrims (the two `linear-gradient()`s from `DESIGN-TOKENS.md` §1) — no native equivalent, straight CSS

**Still open, deliberately not decided here:**
- Custom font upload for Instrument Serif and Geist — `font_picker` settings support uploading a custom font through the theme editor, which would be the native path, but that's an Admin action, not something resolvable from source. The font files are staged locally (`~/Downloads/Geist/`) and ready whenever that step happens; Instrument Serif isn't yet confirmed staged the same way.
- Focus-ring colour — no dedicated setting found beyond the button-specific `--color-primary-button-focus-outline`; needs a decision once we're building actual interactive components, not before.

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
