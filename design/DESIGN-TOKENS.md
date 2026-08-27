# Lambruk Pantry — Design Tokens Reference

Extracted from `design/Lambruk Pantry Design System/` (tokens/*.css, readme.md, sources/Lambruk Pantry - Design Guide.md, guidelines/*.html, components/*, ui_kits/website/*.jsx, _ds_manifest.json, plus the newly-added `uploads/LambrukPantry.dc.html` desktop and `uploads/LambrukPantry Mobile.dc.html` mobile full-site mockups). This is a reference for what the mockups specify — **not** an instruction to build any of it yet. Per the customisation hierarchy in `CLAUDE.md`, these values should land primarily as theme settings and CSS custom property overrides.

Where sources disagree, both variants are listed under **Flagged inconsistencies** at the end rather than silently resolved.

**2026-08-20 update — superseded by `design/design_handoff_website/`.** The `uploads/*.dc.html` mockups this document was built from, and the rest of `design/Lambruk Pantry Design System/`, are archived at `design/_archive/Lambruk Pantry Design System/` — superseded by the complete 8-page client handoff at `design/design_handoff_website/`. Re-verified every section below against the new package the same day; results are recorded inline where something changed. **`design/design_handoff_website/design-system-tokens/colors.css` is a fresh export, not authoritative on its own** — it carries none of this document's resolutions (no `--icon-accent`, and `--text-accent` reverted to its raw, unresolved value). Treat this document, not that file, as canonical.

**2026-08-18 update — mobile/desktop mockups added.** Two new full-site prototypes landed in `uploads/`: `LambrukPantry.dc.html` (desktop, 1240px container) and `LambrukPantry Mobile.dc.html` (mobile, fixed 390px viewport). Unlike the original `ui_kits/website/` recreation — which only builds the homepage — these two files simulate an entire client-side-routed site: Home, Shop (Tea/Condiments/Pantry category filters), Product detail, four Occasion pages (Slow Mornings, Entertaining, Sunday Roast, High Tea), Cafe (with a booking form and photo gallery), Wholesale enquiry, Our Story, Contact, and policy pages (Shipping, Refunds, Terms). This directly contradicts `readme.md`'s CAVEATS section, which still says "one surface only... Shop listing, product detail, checkout, Our Story, Contact and the wholesale application are not designed here" — that caveat is now stale and hasn't been updated to match. Sections 8–9 below and the new flagged items cover what changed. `ui_kits/website/` also gained two components not documented in `readme.md`'s component table: `Reviews.jsx` (star ratings + customer review cards) and `Subscribe.jsx` (inline newsletter capture, a leaner alternative to `Newsletter.jsx`) — both are the first components in the system built mobile-responsive from the start, via a shared `responsive.js` breakpoint hook.

---

## 1. Colour

### Lambruk Blue — cool navy/ink ramp (text, deep panels, footer)

| Step | Hex |
|---|---|
| 50 | `#F6F6F9` |
| 100 | `#E9EBF1` |
| 200 | `#D1D4E5` |
| 300 | `#AAB2D4` |
| 400 | `#7A86C3` |
| 500 | `#4B5DB4` |
| 600 | `#394893` |
| 700 | `#2A3879` |
| 800 | `#1C2552` |
| 900 | `#131A3E` — signature navy |
| 950 | `#0D1024` — deepest ink |

### Lambruk Gold — warm muted gold (accents, eyebrows, hairlines, CTAs on navy)

| Step | Hex |
|---|---|
| 50 | `#F7F5F2` |
| 100 | `#EFE9E1` |
| 200 | `#E3D6C5` |
| 300 | `#D4BA9C` |
| 400 | `#C6A06C` |
| 500 | `#BF8C45` — accent |
| 600 | `#A07037` |
| 700 | `#83572A` |
| 800 | `#5B3F1F` |
| 900 | `#3B2917` |
| 950 | `#231910` |

Two ramps and nothing else. Gold is a seasoning, not a base — used sparingly for eyebrows, hairlines, small marks and one accent CTA per view.

### Surfaces

| Token | Value | Role |
|---|---|---|
| `--paper` | `#FBFAF7` | page background (warm, never clinical white) |
| `--paper-2` | `#F4F1EA` | alt section band |
| `--surface-card` | `#FFFFFF` | card fill |
| `--surface-sunken` | `var(--gold-50)` → `#F7F5F2` | recessed/empty-state fill |
| `--surface-dark` | `var(--blue-900)` → `#131A3E` | navy band, **footer included as of 2026-08-20** |
| `--surface-darker` | `var(--blue-950)` → `#0D1024` | deepest band |

A view uses at most two background colours: paper plus either the alt paper or navy. Full-bleed bands alternate paper → alt paper → navy → photography.

**Changed 2026-08-20 — footer moved from ink to navy.** The old mockups used `--surface-darker` (`#0D1024`) for the footer; `design_handoff_website/` uses `--surface-dark` (`#131A3E`) instead, confirmed on both desktop and mobile and stated explicitly in that package's own `Site Map.dc.html` ("Footer (navy, `#131A3E`)"). No contrast concern either way — this is a background swap, not a text-color change.

### Brand & accent aliases

| Token | Value | Role |
|---|---|---|
| `--brand` | `var(--blue-900)` → `#131A3E` | primary navy |
| `--brand-deep` | `var(--blue-950)` → `#0D1024` | hover/deep fill |
| `--accent` | `var(--gold-500)` → `#BF8C45` | muted gold accent |
| `--accent-soft` | `var(--gold-400)` → `#C6A06C` | softer accent |

### Text

| Token | Value | Role |
|---|---|---|
| `--text-strong` | `var(--blue-900)` → `#131A3E` | headings |
| `--text-body` | **`#4A5478`** (was `var(--blue-800)` → `#1C2552`) | body copy |
| `--text-muted` | **`#686D84`** (was `#6B7186`) | secondary text |
| `--text-on-dark` | `var(--gold-50)` → `#F7F5F2` | text on navy |
| `--text-on-dark-muted` | `rgba(247,245,242,.72)` | secondary text on navy |
| `--text-accent` | **`#986A34`** (was `var(--gold-500)` → `#BF8C45`) | gold text/eyebrows on paper |
| `--text-accent-on-dark` | **`#AE7A3C`** (was `var(--gold-400)` → `#C6A06C`) | gold text/eyebrows on navy |

**Resolved 2026-08-20 — `--border` fails WCAG 1.4.11 for interactive boundaries; split into decorative vs. functional.** The design's own token, `--border: var(--gold-200)` (`#E3D6C5`), was carried straight into the Horizon build as the global hairline colour. Checked its contrast on `--paper` before relying on it for form-field edges: **1.37:1**, well under the 3:1 threshold WCAG 1.4.11 sets for UI-component boundaries (dividers and decorative rules only need to be visible, not 3:1). This is a gap in the source itself, not a misreading — `--border` is defined as `--gold-200` with no separate functional value anywhere in `colors.css`. Checked the rest of the gold scale for the nearest step that clears 3:1: `--gold-300` 1.78:1, `--gold-400` 2.33:1, `--gold-500` 2.85:1 — all still fail — `--gold-600` (`#A07037`) is the first to pass, at **4.13:1**. Kept `#E3D6C5` for genuinely decorative uses (dividers, popover/drawer container edges, card separators) and overrode the interactive-boundary consumers — input borders, variant-swatch borders — to `#A07037` instead, rather than darkening the palette's shared border colour and losing the lighter decorative look everywhere else.

**Resolved 2026-08-20 — accent/eyebrow colour consolidated and corrected.** `design_handoff_website/` uses a single accent value, `#A07037` (gold-600), for every eyebrow and accent link on both desktop and mobile — confirmed by diffing the full old-vs-new HTML (~30 instances, no exceptions) — replacing what used to be two separate raw values depending on surface (`#BF8C45` on paper, `#C6A06C` on navy). Checked contrast on the raw `#A07037` before adopting it: **4.13:1 on `--paper`** (fails AA; the old `#BF8C45` was worse still, at 2.86:1) and **3.91:1 on navy** (fails AA; the old `#C6A06C` passed comfortably at 6.94:1 — this is a real regression, not just a rounding difference). Same treatment as `--text-muted`: took `#A07037` as design intent and found the nearest point on its own hue/saturation line (H≈32.6°, S≈48.8%) that clears 4.5:1 in each direction — darker for paper, lighter for navy, keeping both as separate tokens rather than collapsing to one value. **`--text-accent` → `#986A34`, 4.53:1 on `--paper`. `--text-accent-on-dark` → `#AE7A3C`, 4.54:1 on navy.** Both hold a small margin above 4.5, matching the precedent's approach.

**Resolved 2026-08-18 — body-text palette updated.** The mobile/desktop full-site mockups (`uploads/LambrukPantry.dc.html`, `uploads/LambrukPantry Mobile.dc.html`) use `#4A5478` and `#8A8FA3` in place of the old `--text-body`/`--text-muted` values 181 and 32 times respectively, with **zero** remaining uses of the old `#1C2552`/`#6B7186` hex codes in either file — a complete, deliberate swap, not stray values.

- **`--text-body` → `#4A5478` as-is.** Contrast against every surface it's used on: 7.11:1 on `--paper`, 6.58:1 on `--paper-2`, 7.42:1 on `--surface-card` — comfortably AAA for normal text. Adopted verbatim.
- **`--text-muted` → `#686D84`, not `#8A8FA3` as-is.** The mockup's raw `#8A8FA3` fails WCAG AA for normal text on every surface (3.08:1 / 2.85:1 / 3.21:1 — all below the 4.5:1 threshold), and it's used at normal sizes (12–14px review counts, meta lines), not large text where the lower 3:1 bar would apply. `#686D84` is the nearest point along `#8A8FA3`'s same hue/saturation line that clears 4.5:1 on the tightest surface (`--paper-2`): **4.90:1 on `--paper`, 4.53:1 on `--paper-2`, 5.11:1 on `--surface-card`** — same cooler, lighter character the mockups moved toward, adjusted just enough to stay accessible.
- **`--icon-accent` → `#8A6A32`, resolved 2026-08-18.** Checked its usage: all 3 occurrences are `stroke="#8A6A32"` on SVG paths (`fill="none"`) in the "Sustainably sourced / Freshness secured / Low sugar" icon trio, desktop-only — never applied to text or fills anywhere in either mockup. The icon sits inside a `gold-200` (`#E3D6C5`) rounded badge, not directly on `--paper-2`, so the relevant check is the WCAG 1.4.11 non-text (graphics) threshold of 3:1 against that badge fill: `#8A6A32` on `#E3D6C5` measures **3.51:1** — clears it. Tokenised as-is (no adjustment needed, unlike `--text-muted`, since icon strokes only need 3:1, not the 4.5:1 text bar). Added to `tokens/colors.css`.

### Lines

| Token | Value | Role |
|---|---|---|
| `--border` | `var(--gold-200)` → `#E3D6C5` | warm hairline (cards, dividers, inputs) |
| `--border-strong` | `var(--gold-300)` → `#D4BA9C` | secondary-button border |
| `--border-on-dark` | `rgba(198,160,108,.28)` | hairline on navy |
| `--divider` | `var(--gold-100)` → `#EFE9E1` | list-row dividers |

### Interaction & overlay

| Token | Value | Role |
|---|---|---|
| `--focus-ring` | `var(--gold-400)` → `#C6A06C` | focus ring colour |
| `--scrim` | `rgba(13,16,36,.46)` | drawer/modal overlay |
| `--scrim-soft` | `rgba(13,16,36,.22)` | lighter overlay |

### Image-protection scrims (not tokenised, used inline)

- **Hero (left→right):** `linear-gradient(90deg, rgba(13,16,36,.72) 0%, rgba(13,16,36,.52) 46%, rgba(13,16,36,.18) 100%)`
- **Cards/panels (bottom-up, three-stop):** `linear-gradient(0deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.46) 44%, rgba(0,0,0,0) 72%)` — **changed 2026-08-20**, was navy-tinted `rgba(13,16,36,…)`, now pure black. Confirmed scoped to card/tile-scale scrims only (category tiles, occasion cards) — the large hero-scale scrims (Cafe hero, Shop occasion-active hero) were unchanged at the time, still navy-tinted `rgba(13,16,36,…)` in `design_handoff_website/`, with an explicit note here not to apply the pure-black recipe to hero scrims.

  **Reversed for the occasion hero specifically, 2026-08-28 — deliberate client departure from source, not a correction.** `design_handoff_website/`'s occasion-active hero scrim is confirmed unchanged from the value above — `linear-gradient(0deg, rgba(13,16,36,.88) 0%, rgba(13,16,36,.48) 46%, rgba(13,16,36,.12) 76%)` on desktop, `rgba(13,16,36,.9/.44/.1)` at `0%/52%/80%` on mobile, both re-verified directly in source before this change, not assumed from the note above. `sections/lambruk-occasion-hero.liquid`'s scrim now uses `rgba(0, 0, 0, …)` in place of `rgba(13, 16, 36, …)`, same stops and opacities otherwise unchanged — client's own call: the photography should read warm and natural under the scrim, not colour-shifted toward the brand navy. This is the one hero-scale scrim now diverging from source; the Cafe hero's own scrim is untouched and still navy-tinted, per the original note above — don't generalize this change to it without the same explicit sign-off.

Text over photography always sits on a scrim, never the bare image. Capsules/label chips are not used to protect text. These are the only gradients in the system — no decorative gradients elsewhere.

---

## 2. Typography

**Families**
| Token | Stack | Use |
|---|---|---|
| `--font-serif-display` | "Instrument Serif", Georgia, "Times New Roman", serif | all display/headings |
| `--font-sans` | "Geist", "Helvetica Neue", Helvetica, Arial, sans-serif | body, UI, labels, eyebrows |
| `--font-mono` | ui-monospace, SFMono-Regular, Menlo, monospace | SKUs and spec values only — **Geist Mono was not supplied**, this is the system fallback |

**Reconfirmed 2026-08-20 — checked against a raised doubt, held.** Queried directly: is this table accurate, or should everything be Geist? Re-read the primary source rather than trusting this file or the question's premise — `grep`'d every `font-family` declaration in both full-site mockups (`design_handoff_website/LambrukPantry Desktop.dc.html`, `Mobile.dc.html`), not just the token file. Findings: `body { font-family: "Geist", … }` is set once, globally — every element inherits it by default. `"Instrument Serif"` is set explicitly **65 times on desktop, 69 on mobile**, and **100% of those are on heading-scale elements** — `<h1>`/`<h2>`/`<h3>` tags, or `<p>`/`<span>` standing in for one (product-card review titles, the quote-panel statement text, the "4.8" rating stat, a phone number sized as a mini-heading). Zero hits on body-scale text (checked specifically: no 14–17px paragraph carries it). `components/actions/Button.jsx` sets `fontFamily: 'var(--font-sans)'` explicitly — buttons are Geist. Nav links and eyebrows carry no font-family override at all — Geist by inheritance. The logo (`assets/lambruk-logo-*.svg`) has no font dependency whatsoever — checked the SVG directly, it's fully vector-outlined paths, zero `<text>` elements. This table was correct as written; nothing changed.

Instrument Serif ships one weight (400, incl. italic) — hierarchy comes from size, not weight. Italics are the only in-headline emphasis. Geist is variable, 100–900, upright + italic.

### Canonical type scale — approved 2026-08-18

Derived from a full inventory of every heading and body size used across `ui_kits/website/`, `guidelines/`, and the two full-site mockups (`uploads/LambrukPantry.dc.html` / `LambrukPantry Mobile.dc.html`) — 20 distinct serif sizes and 13 distinct sans sizes, consolidated into 8 steps. **This supersedes the display/body tables in `tokens/typography.css`**, which are marked deprecated there (see section 2's CAVEATS note below and the CSS file itself).

Expressed as `clamp()` fluid type between a 390px (mobile) and 1240px (desktop) viewport, rather than a hard switch at the `useIsMobile` 720px breakpoint — sizes interpolate smoothly through tablet widths instead of jumping. The 720px breakpoint still governs *structural* changes (grid columns, nav pattern, cart-drawer style — see section 8/9); it no longer governs type size.

| Step | Mobile (390px) | Desktop (1240px) | `clamp()` | Line-height |
|---|---|---|---|---|
| Display 1 · Hero | 38px | 56px | `clamp(38px, 29.741px + 2.118vw, 56px)` | 1.04 |
| Display 2 · Title | 34px | 48px | `clamp(34px, 27.576px + 1.647vw, 48px)` | 1.06 |
| Display 3 · Feature | 32px | 40px | `clamp(32px, 28.329px + 0.941vw, 40px)` | 1.08 |
| Display · Module | 28px | 36px | `clamp(28px, 24.329px + 0.941vw, 36px)` | ~1.1 (no explicit source value — interpolated between Feature's 1.08 and Section's 1.15) |
| Display 4 · Section | 28px | 32px | `clamp(28px, 26.165px + 0.471vw, 32px)` | 1.15 |
| Display 5 · Card | ~20px | **24px** ~~26px~~ | *(Horizon-native, via `type_preset: "h4"` — see correction below)* | 1.2 |
| Text 1 · Large | 16px | 17px | `clamp(16px, 15.541px + 0.118vw, 17px)` | 1.65 |
| Text 2 · Body | 15px | 15px | **fixed 15px** — no interpolation, doesn't shrink on mobile | 1.6 |
| Text 3 · Micro | 11px | 12px | `clamp(11px, 10.541px + 0.118vw, 12px)` | 1.5 (eyebrow variant: `0.22em` tracking) |

**Text 2 · Body meta-text exception.** Genuine meta/functional text — nav links, addresses, review counts, timestamps — stays **fixed at 14px on both breakpoints**, distinct from Body's 15px paragraph copy. It doesn't shrink further on mobile the way Text 1/Display steps do, because it's already compact; it's also not styled like Text 3's all-caps tracked eyebrows, so it doesn't fold into that step either. Treat it as a documented variant of Text 2, not a 9th step.

**What collapses into each step:**

| Step | Raw desktop sizes absorbed | Raw mobile sizes absorbed |
|---|---|---|
| Display 1 · Hero | 58, 56, 54 | 38 |
| Display 2 · Title | 52, 46 | 40, 36, 34 |
| Display 3 · Feature | 44, 42, 38 | 32, 30 |
| Display · Module | 36 | 28 |
| Display 4 · Section | 32, **30** (card/category H3s — see below) | 28 |
| Display 5 · Card | 28, 26, 22 | 26, 24, 20 |
| Text 1 · Large | 19, 18, 17 | 18, 17 |
| Text 2 · Body | 16, 15 | 16, 15 |
| Text 2 · Body (meta exception) | 14, 13 | 14, 13 |
| Text 3 · Micro | 13, 12 | 11 |

**Card/category H3 correction.** The raw 30px desktop size (Tea Collection / Sauces & Chutney / Pantry Staples category tiles, and similar card titles) was originally mapped to Display 5 · Card (26px) as the nearest step — collapsing it down. On review it moves to **Display 4 · Section (32px)** instead: rounding a card title up to match section headings reads better than rounding it down toward the smaller card-caption tier it shares with review-quote titles and confirmation messages. Its mobile companion moves with it, from Display 5's 22px to Display 4's 28px.

**Display · Module correction, 2026-08-20 — the original absorption of raw 36 into Display 4 · Section was the wrong call, found by counting real usage rather than trusting the first mapping pass.** Raw 36px was originally folded into Display 4 · Section (32px) the same way 30 was — treated as one more desktop size close enough to round down. It isn't: counted every raw 32px and 36px heading across `design_handoff_website/LambrukPantry Desktop.dc.html` (`ARCHITECTURE.md` §16) and found **32px is the numeric majority (9 instances) against 36px's 5**, and — more importantly than the count — **the two sizes serve two consistently different structural roles, not one drifting toward the other**:
- Every 32px instance introduces a **full-width, single-column section** (Homepage/Product/Cafe: "Explore by category", "The Seasonal Spotlight", "What our customers say", "Inside Lambruk Kitchen", and five more) — always the same shape, eyebrow above, a horizontal rail or grid of cards below, spanning the whole container.
- Every 36px instance sits in a **narrower content module** instead: one column of a paired two-column grid (Wholesale's "Who we supply" / "Available specifications", side by side — effective column width ~540px, well under the 1160px a 32px heading gets), or a narrow `max-width:820px` single-column prose page (the unbuilt Shipping/Returns/Terms policy headings) — a different container class entirely, closer to article measure than section-rail measure.

Rounding 36 down to 32 collapsed two real roles into one step and was silently wrong on every page that used it (confirmed live on Wholesale: both headings rendered 32px against a 36px source, an 11% gap — more noticeable than the H1's 2px rounding elsewhere). Given a genuinely closer real precedent exists too — other two-column module headings ("Traceable to the grower", "A home cook who kept going", "Tell us about your business") are raw 42px, correctly on Display 3 · Feature, *larger* than both 36 and 32 in the same narrow-column position — 36 isn't simply "narrow column, therefore bigger"; it's its own distinct, smaller role, most likely used specifically where two headings sit paired in the same row rather than one dominant heading alone. Added as its own step, **named for its role rather than slotted in as a renumbered Display tier** — "Display · Module" — so the distinction (full-width rail vs. narrower module) stays legible in the name itself, not just in a footnote explaining why the numbering skips around. `--display-4-size` (Display 4 · Section, 32px) is otherwise unchanged; its own raw-30 card-title consumer above is untouched by this.

**Concession, approved 2026-08-19 — Display 5 · Card moves to Horizon's native 24px, not our own 26px.** ~~During the Horizon settings-mapping pass, `type_size_h5`'s fixed option list (10/12/14/16/18/20/24/32/…) turned out to have no 26px option — nearest is 24px. Rather than hand-rolling a CSS override 2px off Horizon's own value just to hit our number exactly, we're accepting Horizon's 24px as Display 5 outright. The mobile companion is no longer a value we hand-pick either: Horizon derives H5's fluid minimum from its own formula (based on the next-smaller preset in use), not our 390px-viewport target, so it will land close to but not exactly at 20px.~~

**Correction, 2026-08-20 — this concession was never checked against a live setting, and named the wrong preset.** `type_size_h5` does have a 24px option in its dropdown, but the theme was never actually configured to use it: `config/settings_data.json` still carries Horizon's untouched stock default, `type_size_h5: "14"`, identical to the `Horizon` preset — nobody had set it to 24. Worse, H5/H6 turn out to be the wrong role entirely: `type_font_h5`/`h6` map to Horizon's small "Subheading" UI-label scale, not a Display-card heading scale — confirmed empirically 2026-08-20 while building the icon+heading+copy trio (see `ARCHITECTURE.md` §10): a `text` block set to `type_preset: "h5"` rendered at **14px live**, not 24px. The 24px target is still real and still reachable natively — just via **`type_preset: "h4"`**, not `h5`. `type_size_h4` is `"24"` and fixed on every viewport (no fluid step, confirmed — Horizon's fluid algorithm only activates above a 48px cutoff per `assets/lambruk-tokens.css`'s own notes), and `type_font_h4` maps to the `heading` role (Instrument Serif), which is what this step needs. That also means the mobile companion isn't "close to 20px" as originally claimed — it's flat 24px on every viewport, same as desktop, roughly 4px above the ~20px mobile target, not fluidly interpolated at all. **Why this one entry was vulnerable and the breakpoint/gutter concessions elsewhere in this file weren't:** those cite values read directly from a hardcoded `assets/base.css` media query — genuinely unconfigurable, no "was it actually set" risk. This one cited a *configurable setting's value* without ever checking what that setting was actually set to.

**Two things intentionally excluded from the scale:**
- The "4.8" rating-stat numeral (raw 52px desktop / 40px mobile) — a one-off oversized stat display, not running type. Its own mobile reduction (−23%) doesn't match any step's ratio, so it keeps a bespoke size rather than being forced onto the scale.
- The cart-count badge numeral (9px) — pure UI chrome, smaller than even Text 3 · Micro, handled as a component-level override.

**Eyebrow / overline** — Text 3 · Micro (11–12px), uppercase, `0.22em` letter-spacing, weight 500, gold (`--text-accent` on paper / `--text-accent-on-dark` on navy). Always short (1–3 words), never a sentence, never punctuated.

### Legacy scale (superseded — kept for reference only)

The original 5-step display / 4-step body tables from `tokens/typography.css`, in place before the mobile/desktop mockups landed. Retained here so the mapping above is traceable; do not build against these.

**Display scale — Instrument Serif** (`letter-spacing: -0.01em` throughout)

| Style | Size | Line-height |
|---|---|---|
| Display 1 / H1 | 56px | 1.02 |
| Display 2 / H2 | 48px | 1.05 |
| Display 3 / H3 | 40px | 1.1 |
| Display 4 / H4 | 32px | 1.15 |
| Display 5 / H5 | 24px | 1.25 |

**Body scale — Geist**

| Style | Size | Line-height |
|---|---|---|
| Body Large | 18px | 1.6 |
| Body Default | 16px | 1.6 |
| Body Small | 14px | 1.55 |
| Body XSmall | 12px | 1.5 |

**Named weights**

| Token | Value |
|---|---|
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |

**Reconfirmed 2026-08-20 — checked against Horizon's four font-picker roles (Body/Subheading/Heading/Accent), for real weight assignment, not just this table.** Counted actual `font-weight` CSS across both full-site mockups rather than trusting this table, which had no evidence trail behind it until now.
- **Body (paragraph copy) → 400 Regular.** 28 of 34 body-scale (14–17px) paragraphs carry no `font-weight` at all (CSS default = normal = 400, confirmed both files). The only exceptions — 6 instances, identical — are wholesale/contact form field labels ("Interested in *", "Message *"), which use 500 but aren't paragraph copy; they're UI labels that happen to share the 14px size class.
- **Heading → 400 Regular, exclusively.** Counted every Instrument Serif instance across both files (H1–H4-scale, i.e. excluding the H5/H6 set counted under Subheading below): **65 on desktop, 69 on mobile.** Of those, 61/65 desktop and 60/69 mobile explicitly declare `font-weight:400`; the rest (4 desktop, 9 mobile — the "4.8" rating stat, a cart line-item name, a couple of section headings) declare no weight at all, which still resolves to 400 by CSS default. **Zero instances, either file, declare any weight other than 400.** Confirmed why at the source level, not just by convention: searched the entire design package, archived copy included, for every Instrument Serif font file that exists anywhere — there are exactly two, `InstrumentSerif-Regular.ttf` and `InstrumentSerif-Italic.ttf`, both declared at `font-weight:400` in their `@font-face` rules. No bold/medium/semibold file was ever supplied. The client's Regular (400) selection is correct, and not just the best available choice — it's the only one that exists.
- **Subheading → 400 Regular, exclusively.** Horizon's own `config/settings_data.json` maps `type_font_h5`/`type_font_h6` to the `subheading` role — so "Subheading" means whatever fills H5/H6, which in this design is Display 5 · Card-scale content (review-card titles, italic occasion-card titles, 22–26px, Instrument Serif). Every instance that declares a weight says `font-weight:400`, with zero exceptions — same underlying constraint as Heading above: Instrument Serif has no other weight to render, requested or not. **Practical warning for the font-picker setup:** don't select anything but 400/Regular for whichever role ends up serif — Shopify would have to synthetically bold a font that has no bold face, which looks worse than not bolding at all.
- **Accent (eyebrows, `.22em` letterspacing) → split, 500 dominant.** 35 of 47 instances explicitly declare `font-weight:500` (74%); the remaining 12 have no weight declared (defaulting to 400) — mostly product-detail sub-labels ("Perfect With", "Provenance") and Cafe booking form micro-labels ("Date", "Time"), a slightly different, smaller-emphasis category than the page-section-introducing eyebrows, which consistently use 500. Confirmed on both desktop and mobile (35/12 desktop, 35/10 mobile) — dominant and correct default: **500 Medium**.

**Measures**

| Token | Value | Use |
|---|---|---|
| `--measure-prose` | 820px | prose max-width |
| `--container` | 1240px | page container max-width |

Body copy generally wraps narrower still — `SectionHeading`'s description caps at 640px, `Newsletter`'s at 560px.

**Casing rules**
- Eyebrows: ALL CAPS, 0.22em tracking.
- Headlines: sentence case, Instrument Serif.
- Buttons/links: Title Case.
- Category/product names: Title Case.

---

## 3. Spacing

**4px base scale**

| Step | Value |
|---|---|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |
| 32 | 128px |

**Rhythm**

| Token | Value | Use |
|---|---|---|
| `--section-y` | 96px | vertical section padding — confirmed consistent across every section in `ui_kits/website/` |
| `--gutter` | 32px (token) / **40px (actual usage — see flagged inconsistencies)** | container side padding |

**Layout**
- Container: 1240px centred, side padding 40px in every real usage (Header, Hero, Categories, Occasions, Promise, Spotlight, Footer).
- Prose measure: 820px.
- Fixed elements: sticky header 88px tall; cart drawer 420px wide, slides in over `--scrim`.

**Image aspect ratios**
| Context | Ratio |
|---|---|
| Hero | 16:9 (full-bleed, no explicit CSS aspect-ratio — section-height driven) |
| Category tiles | 1:1 |
| Occasion cards | 3:4 |
| Product cards | 4:3 |
| Promise/feature imagery | 4:5 |

---

## 4. Corner radii

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | Badge |
| `--radius-sm` | 6px | Button, IconButton (square variants), Input, cart-item thumbnail |
| `--radius-md` | 10px | motion demo blocks, prose-measure callout — no primitive component confirmed at this step |
| `--radius-lg` | 16px | Card (ProductCard, brand card), illustration dark panel |
| `--radius-pill` | 999px | Tag, IconButton, cart-count badge, hairline chip |

Restrained, never blobby. Cards 16px; buttons and inputs 6px; chips, pills and the cart badge full pill.

---

## 5. Borders

| Token | Value | Use |
|---|---|---|
| `--border` | 1px, `gold-200` `#E3D6C5` | cards, dividers, inputs, default button/tag hairlines |
| `--border-strong` | 1px, `gold-300` `#D4BA9C` | secondary-button border |
| `--border-on-dark` | 1px, `rgba(198,160,108,.28)` | hairlines on navy |
| `--divider` | 1px, `gold-100` `#EFE9E1` | list-row dividers (e.g. cart drawer items) |

All borders are 1px hairlines — quiet, never structural. Error state (Input) swaps the border to `gold-700` `#83572A`.

---

## 6. Shadows

| Token | Value | Use |
|---|---|---|
| `--shadow-whisper` | `0 1px 2px rgba(13,16,36,.04)` | card rest state |
| `--shadow-card` | `0 8px 24px rgba(13,16,36,.08)` | card hover state |
| `--shadow-lift` | `0 14px 34px rgba(13,16,36,.12)` | drawers/overlays |
| `--shadow-inset-hairline` | `inset 0 0 0 1px var(--border)` | Badge `tone="paper"` only — the sole inner shadow in the system |

Warm navy-tinted, low opacity. Cards lean on the border hairline; the shadow is a hint, not elevation.

**New, un-tokenised shadow in the desktop mockup.** The cart drawer in `uploads/LambrukPantry.dc.html` uses `box-shadow: 0 24px 64px rgba(13,16,36,.18)` — bigger and darker than `--shadow-lift`, which the earlier `readme.md` prose named as the drawer shadow. Same warm-navy tint and low-opacity family, just a step beyond the three named tokens; worth deciding whether this becomes a fourth step (e.g. `--shadow-overlay`) or `--shadow-lift` gets revised to match.

---

## 7. Motion

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(.22,.61,.36,1)` | all transitions |
| `--dur-fast` | 140ms | colour changes |
| `--dur-base` | 240ms | default transition (fills, borders, shadows) |
| `--dur-slow` | 420ms | image scale, cart drawer slide |
| `--hover-lift` | -2px | card hover translateY |
| `--press-scale` | 0.98 | button/card press |
| `--image-hover-scale` | 1.03 | clipped image hover zoom |
| `--blur-header` | `saturate(140%) blur(10px)` | header backdrop once scrolled past 24px |

Calm and editorial — fades and short position shifts only. No bounce, no spring, no overshoot, no scroll-triggered entrance animations.

---

## 8. Breakpoints

Previously flagged as entirely unspecified — the mobile/desktop upload resolves this, though only in raw mockup form; no token file or compiled doc has been updated to match.

**One breakpoint, defined in code, not CSS.** `ui_kits/website/responsive.js` ships a `useIsMobile(bp)` hook defaulting to **`bp = 720`** — `(max-width: 720px)` via `matchMedia`. `Reviews.jsx` and `Subscribe.jsx` (the two new UI-kit sections) are the only components that consume it; every other primitive and section in `ui_kits/website/` and `components/` is still unresponsive (built for desktop only).

**The two full-site mockups aren't responsive documents — they're two separate fixed-width prototypes:**
- Desktop: `uploads/LambrukPantry.dc.html` — 1240px container (matches `--container`), no `@media` queries at all.
- Mobile: `uploads/LambrukPantry Mobile.dc.html` — hardcoded **390px** viewport (`width:390px;margin:0 auto`, iPhone-standard), also no `@media` queries.

So there's a real mobile design now, but it exists as "how this looks at 390px" and "how this looks at 1240px+" rather than as a documented breakpoint scale with fluid rules in between (e.g. nothing specifies behaviour at a 600px or 900px tablet width). Still no token for the 720px value in `tokens/spacing.css` or `_ds_manifest.json`.

**Update 2026-08-18 — type no longer uses this breakpoint.** The canonical type scale in section 2 replaces the implied 390px/720px-hard-switch with `clamp()` fluid interpolation across the same 390–1240px range, so tablet widths get real in-between sizes instead of jumping at 720px. The 720px breakpoint is unchanged for everything structural — grid columns, nav pattern, cart-drawer style (section 9) — only type size stopped using it.

**Concession, approved 2026-08-19 — the *structural* breakpoint becomes Horizon's native 750px, not the mockups' 720px.** Horizon's own layout margin switch is a hardcoded `@media (min-width: 750px)` in `assets/base.css` — not a setting, not overridable without touching a Horizon file directly. **Why:** the gap is 30px, well inside normal device-width variance and imperceptible in practice; matching our JS-driven 720px would mean either editing Horizon's own CSS (against the customisation hierarchy) or running two slightly different breakpoints side by side for no visible benefit. Grid-column collapse, nav-drawer pattern, and cart-drawer style (section 9) should all key off 750px going forward, not 720px. See `ARCHITECTURE.md`.

---

## 9. Mobile vs. desktop deltas

Extracted by diffing the two `uploads/*.dc.html` mockups. These are the concrete adjustments the mobile design makes relative to the desktop values documented above — treat them as the mobile-breakpoint variants of the tokens in sections 1–7, not as a separate system.

| Property | Desktop | Mobile |
|---|---|---|
| Header height | 88px | 64px |
| Header background | `rgba(251,250,247,.92)` + `--blur-header` | `rgba(251,250,247,.94)` + `--blur-header` (same blur, slightly less transparent) |
| Container/gutter padding | 40px each side | ~~20px~~ **16px** each side (concession — see below) |
| Section vertical padding | 96px (`--section-y`) | 44–56px (varies by section — not a single mobile token, e.g. Reviews/Occasions use 44px, Cafe/Wholesale panels use 56px) |
| Category/product grid | 3–4 columns (`repeat(3,1fr)` / `repeat(4,1fr)`) | 2 columns (`1fr 1fr`) throughout |
| Primary navigation | Inline nav links in header | Hamburger icon opens a **left-side slide-in drawer**, 330px wide |
| Cart drawer | Right-hand vertical drawer, 420px wide, full height, `0 24px 64px rgba(13,16,36,.18)` shadow | **Bottom sheet**, 390px wide (full viewport), rounded top corners only (`16px 16px 0 0`), `max-height: 86vh` — a different interaction pattern, not just a resized version of the desktop drawer |
| Reviews card | Fixed 22px padding, 22px serif title, part of a 3-column grid | 268px fixed-width card, 20px serif title, horizontally scrolling rail |
| Subscribe heading | 28px | 24px |
| ~~Hero/heading sizes~~ | ~~Scale up to 56–58px~~ | ~~Compressed — no display size above ~40px was found on the mobile mockup's home screen~~ — **superseded by the canonical fluid scale in section 2** |
| Our Story full-bleed photo, aspect ratio | `16 / 9` | `4 / 3` |

**Our Story's full-bleed photo is the one confirmed instance of a genuinely different (not just scaled) aspect ratio between breakpoints**, added 2026-08-26 while building the page. `blocks/image.liquid`'s own `image_ratio` setting isn't responsive — one value, no breakpoint variant — so this needed a scoped `custom-liquid` override (`#shopify-section-{{ section.id }} .placeholder-image, ... .image-block__image { aspect-ratio: 4/3; }` under a `max-width: 749px` media query), same pattern already used for the Cafe map embed and footer heading style. Deliberate, not a rounding concession: at a 343px mobile column width, 16:9 renders ~193px tall (a thin strip) against 4:3's ~257px — real presence for the page's one photograph, and the design specifies both ratios explicitly rather than leaving mobile to inherit the desktop value.

**No bottom tab bar.** Despite the mobile-majority traffic note in `CLAUDE.md`, the mobile mockup doesn't add a persistent bottom navigation bar — cart and menu stay in the header, same pattern as desktop just at a smaller header height.

**Concession, approved 2026-08-19 — mobile gutter becomes Horizon's native 16px, not the mockups' 20px.** Horizon's `--page-margin` is hardcoded to 16px below 750px in `assets/base.css` (desktop's 40px already matched ours exactly — see section 8). **Why:** 4px is below the threshold most people notice in a side margin, and 16px is the one mobile spacing value in this whole comparison that Horizon ships for free; overriding it would mean touching `base.css` directly (there's no setting for it) just to close a 4px gap. Not worth the maintenance cost against future Horizon updates. `--gutter` in `tokens/spacing.css` remains deprecated per the flagged inconsistency below regardless — this concession is about the *mobile* value specifically, not a reversal of that finding. See `ARCHITECTURE.md`.

---

## Minor UI refinements, 2026-08-20

Noticed while diffing `design_handoff_website/` against the archived mockups — not token changes, but worth knowing when building against the new package:

- "Shop all"-style CTA text links switched from gold-coloured plain text to navy + underline. Plain inline links (`a{color:…}`) still use the accent colour above — this is specific to that CTA-link pattern.
- Header and the homepage proof bar lost their hairline borders (`border-bottom`/`border-top`/`border-bottom: 1px solid #E3D6C5`) — both now sit without a divider.
- Hero image aspect ratio changed from 16/11 to 16/13.
- Story page's "How we make things" trio swapped generic line icons for the brand's own ink illustrations (`seedling-ink.png`, `peach-ink.png`, `preserve-jar-ink.png`) at 48px.
- `&nbsp;` added before each inline illustration in the quote text (Promise/Why Lambruk bands) — a wrap-safety fix. See the corresponding `ARCHITECTURE.md` open question: this also confirms illustrations sit *inside* the sentence, not trailing it.

## Flagged inconsistencies

Rather than resolve these silently, they're listed here for a decision before they're encoded as theme settings.

1. **Gutter/container side-padding: 32px token vs. 40px everywhere in practice.**
   `tokens/spacing.css` defines `--gutter: 32px`, and `_ds_manifest.json` (machine-generated from the same CSS) repeats it. But `readme.md`'s prose says "a 1240px centred container with **40px gutters**", and every real usage in `ui_kits/website/` (Header, Hero, Categories, Occasions, Promise, Spotlight, Footer) hardcodes `padding: '0 40px'` — none of them reference `var(--gutter)` at all. The `--gutter` token itself appears to be unused/orphaned. **40px is the value actually built throughout the source mockups; the token is stale.**

2. **Card corner radius: 16px (precise) vs. "~10–16px" (loose).**
   `readme.md`, `guidelines/brand-card.html`, `guidelines/radii.html` and the `ProductCard.jsx` component all agree cards use exactly `--radius-lg` (16px). But `sources/Lambruk Pantry - Design Guide.md` (the original brand-supplied guide, less precise than the compiled readme) describes radii more loosely as "Restrained and soft — 4–16px. Cards ~10–16px." Treat the 16px figure as authoritative; the design guide's range is imprecise, not a genuine alternate spec.

3. **Tag font-weight (450) isn't one of the three named weight tokens.**
   `--weight-regular` (400), `--weight-medium` (500) and `--weight-semibold` (600) are the only named weights, but `Tag.jsx` sets `fontWeight: 450` directly — an ad hoc value between regular and medium, not aliased to a token. Minor, but worth deciding whether to fold it into `--weight-medium` or keep it as-is.

4. **Eyebrow tone on "Curated Occasions" — muted, not gold.**
   `guidelines/type-eyebrow.html` shows one example eyebrow set in `--text-muted` (grey) rather than the usual `--text-accent` (gold) used for the other two examples on the same card. This is a valid variant — `EyebrowLabel` does define a `tone="muted"` — but the guideline card doesn't explain when muted vs. gold applies to an eyebrow, so it's worth clarifying intent (e.g. secondary/de-emphasised section headers) before use.

5. ~~**Body-text colour: `#4A5478`/`#8A8FA3` in the new mockups vs. `--text-body`/`--text-muted` in tokens.**~~ **RESOLVED 2026-08-18.** `--text-body` → `#4A5478` (adopted as-is), `--text-muted` → `#686D84` (darkened from the mockup's `#8A8FA3` to clear WCAG AA — see the colour section above). `tokens/colors.css` marked deprecated on the old values.

6. ~~**Display type scale (56/48/40/32/24) covers only a fraction of the sizes actually used in the full-site mockups.**~~ **RESOLVED 2026-08-18.** Replaced by the 8-step canonical scale in section 2, built from a full inventory of all 20 serif + 13 sans sizes across both mockups. `tokens/typography.css`'s original 5+4-step scale marked deprecated.

8. **RESOLVED 2026-08-20 — "Become a Stockist" button on the Story-page navy CTA is navy-on-navy on mobile in the source.** Desktop explicitly overrides the button to a light/inverse treatment (`background:#FBFAF7;border-color:#FBFAF7;color:#131A3E`, next to a `Shop Now` button using the design system's own `onDark` variant: `background:var(--gold-50)` `#F7F5F2`, `color:var(--brand)` `#131A3E`). Mobile drops the override entirely and uses the plain `primary` variant instead — which per `Button.jsx`'s own source resolves to `background:var(--brand)` `#131A3E`, `borderColor:var(--brand)` `#131A3E` — a navy button, invisible against the section's own navy background. Almost certainly a mockup authoring slip (the desktop override exists for exactly this reason and nothing suggests the mobile treatment was a deliberate choice), not a genuine mobile-specific design intent. **Applied the desktop override on mobile too** when building this CTA in the theme — same `#FBFAF7` light background, not `--gold-50`/`#F7F5F2` (the `Shop Now` button's colour), preserving the small deliberate distinction between the two buttons that the desktop version already makes.

9. **`readme.md`'s "one surface only" caveat is now stale.**
   The CAVEATS section still states the sources cover only the marketing homepage and that shop listing, product detail, checkout, Our Story, Contact and the wholesale application "were not designed here and were not invented." The new `uploads/*.dc.html` mockups directly contradict this — they include Shop, Product detail, Cafe (with a booking form), Wholesale enquiry, and policy pages. Checkout itself still isn't present (only the cart drawer), so that part of the caveat still holds; the rest doesn't. Worth a pass to update `readme.md` and `_ds_manifest.json`'s component/card inventory to reflect what's actually in `uploads/` now, since anyone reading only the compiled docs (not the raw uploads folder) would still believe this is a homepage-only design system.

8. **Two identical copies of the desktop mockup.**
   `uploads/LambrukPantry.dc.html` and `uploads/LambrukPantry.dc copy.html` are byte-for-byte identical (verified with `diff`). Likely an accidental duplicate from the upload — harmless, but worth deleting one before it's mistaken for a divergent revision later.

10. **Main nav has no current-page or hover state specified anywhere in the source (2026-08-24).**
    `LambrukPantry Desktop.dc.html`'s nav items (Shop/Wholesale/Cafe/Our Story/Contact) are static `<span onClick=...>` elements with one fixed colour (`#131A3E`) and no `:hover` or active/current styling at all — confirmed by reading the source directly. Built anyway, on the same footing as the logo-size change (client ask, not a design-source gap being filled): current page and hover both render in `settings.color_palette.color1` (`#131A3E`), transitioning over 0.15s. See `assets/lambruk-tokens.css` for the implementation and the reasoning behind the colour choice. The design source should be updated to show these states so future builds don't have to reverse-engineer them from the theme.

11. **`ProductCard.jsx`'s own prompt note is wrong about where it's used (2026-08-25).**
    `components/commerce/ProductCard.jsx`'s `.prompt.md` says this component is "used in the seasonal rail and category listings" — it isn't. There are genuinely two separate card treatments in the design, confirmed by comparing `ProductCard.jsx` against the actual Seasonal Spotlight rail markup in `LambrukPantry Desktop.dc.html` (lines 142–161): the rail card has no wrapper border, no background fill, and no card container at all — the image alone carries `border-radius:16px; border:1px solid #E3D6C5`, title and price sit in a `baseline`-aligned row instead of stacked with price at the bottom, and there's no Add button. `ProductCard.jsx` (bordered wrapper, `background: var(--surface-card)`, price at the bottom next to an Add button) is the collection-grid card only — Shop All, the category pages, and the occasion pages — not the rail. The prompt note should be corrected to name the two components separately (or the rail's own markup should be extracted into its own component file) so the next person doesn't reasonably assume, as this build initially did, that one file covers both.

12. **Cafe hero: line-height fixed to match exactly; min-height and heading font-size deliberately left off-spec (2026-08-25).**
    `LambrukPantry Desktop.dc.html` line 564 specifies the Cafe hero at `min-height:520px`, with its H1 (line 569) at `font-size:54px; line-height:1.06`. Measured the built page's computed styles against these three values before touching anything (none estimated):
    - **Line-height — fixed.** Built computed `1.2` vs. design's `1.06`, a visible gap on a two-line heading. `font-size:3.375rem` (54px) classifies as "body" type under `typography-style.liquid`'s own size-threshold logic (same mechanism documented for the Shop All header elsewhere in this build), whose only line-height steps are 1.2/1.4/1.6 — none reach 1.06. Same scoped-CSS-override technique used for Shop All's header: a `custom-liquid` block emitting `<style>#shopify-section-{{ section.id }} h1{line-height:1.06;}</style>`. Verified live: computed line-height now `52.33px` / font-size `49.37px` = exactly `1.060`.
    - **Min-height — deliberately left at Horizon's native `"large"` preset (494px at 1280px viewport), not forced to the literal 520px.** Client decision: a 26px gap is not worth diverging this one hero from the sizing mechanism every other hero section on the site uses. Not a bug, not a future fix — recorded here so it isn't re-flagged.
    - **Heading font-size — deliberately left alone.** Built computes `49.4px` at 1280px viewport, short of the literal `54px`, because this heading uses the same sitewide fluid-clamp system as every other large heading in the build (reaches the full 54px only at ≥1400px viewport width — see the type-scale fluid-sizing mechanism noted elsewhere in this build). Consistent, intentional, sitewide behaviour, not a Cafe-specific shortfall.
