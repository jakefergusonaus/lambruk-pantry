# Lambruk Pantry — Design Guide

Lambruk Pantry is a premium Australian pantry and hospitality brand from the Northern Rivers (Ballina, NSW). It makes small-batch teas, sauces, chutneys, preserves, oils and gourmet pantry essentials, plus a cafe and wholesale program. The brand voice is refined French-country with warm country hospitality — artisanal, sophisticated, and distinctly Australian without being rustic or old-fashioned.

**Sources:** official visual direction PDF (type scale + colour ramps), hi-fi homepage design PDF, the real Lambruk logo (navy + white SVG), and the Instrument Serif / Geist webfonts.

## Brand at a glance
- **Products:** Tea Collection · Sauces & Chutney · Preserves · Oils & Vinegars · Spices · Honey · Pantry Staples · Gift Boxes
- **Experiences:** Lambruk Pantry Cafe (Ballina) · High Tea · Wholesale / Stockist program
- **Proof points:** Multi award winning · Made with real fruit · Australian ingredients · Low FODMAP · Gluten-Free · Glyphosate-Free · No Artificial Sweeteners · Top 9 Allergen-Free

---

## CONTENT FUNDAMENTALS

**Tone.** Warm, confident, editorial. Reads like a thoughtful producer talking about their craft, not a supermarket. Emphasis on provenance ("from the Northern Rivers"), honesty ("a more honest pantry", "less sugar"), and hospitality ("country hospitality", "shared tables").

**Voice — we / you.** The brand speaks as "we" and addresses the reader as "you" (e.g. "We curate life-affirming kitchen essentials", "Join us in the heart of Ballina"). Inclusive and personal.

**Casing.**
- Eyebrows / overlines are ALL-CAPS with wide letter-spacing: `MULTI AWARD WINNING`, `THE LAMBRUK PROMISE`, `INTRODUCING`, `CURATED OCCASIONS`, `WHY LAMBRUK`, `NEW RELEASES`.
- Headlines use sentence case in Instrument Serif: "Handcrafted pantry essentials from the Northern Rivers".
- Buttons use Title Case: "Shop Now", "Visit Our Cafe", "Reserve a table", "Become a Stockist".

**Phrasing examples (verbatim from source):**
- "Handcrafted pantry essentials from the Northern Rivers"
- "Discover handcrafted teas, sauces, chutneys, olive oils and gourmet pantry favourites made with Australian-grown ingredients, real fruit and direct partnerships with local farmers."
- "Every batch is crafted in small quantities and made with less sugar for a more honest pantry."
- "Sourced deep from Australian soil. We curate life-affirming kitchen essentials made by small-batch farmers and passionate artisans."
- "A high tea worth travelling for"

**Spelling.** Australian English — "Colours", "favourites", "café".

**Emoji.** None. The brand never uses emoji. Iconography is minimal line icons only.

**Occasion framing.** Product is grouped by moment, not just category: "Slow Mornings", "Entertaining", "Sunday Roast", "High Tea".

---

## VISUAL FOUNDATIONS

**Colour.** Two ramps only. **Lambruk Blue** is a cool navy/ink ramp used for text, deep panels, and the footer. **Lambruk Gold** is a warm muted gold used sparingly for accents, eyebrows, borders and CTAs on navy. Backgrounds are warm papers, never pure clinical white for large fields. Max 1–2 background colours per view.

**Typography.** Instrument Serif for all display and headings — light, elegant, high-contrast serif with a French-editorial feel; often set large with generous line-height and occasional italics for emphasis. Geist (variable sans) for all body, UI, labels and eyebrows. Eyebrows are 12px caps at `0.22em` tracking.

**Spacing & layout.** Generous whitespace is core. 4px base scale; section vertical rhythm ~96px. Centered container ~1240px, narrower ~820px measure for prose.

**Backgrounds.** Warm solid paper fields and navy bands; tactile full-bleed food photography for hero and feature blocks. No gradients, no busy patterns.

**Borders.** Warm hairline borders (gold-200) on cards and dividers; navy borders on dark panels. 1px, quiet.

**Radii.** Restrained and soft — 4–16px. Cards ~10–16px. Pills (999px) for tags and some buttons.

**Shadows.** Subtle, warm-navy tinted, low opacity. Cards rely mostly on borders + a whisper of shadow.

**Motion.** Calm and editorial. Fades and gentle 140–420ms transitions on an ease-out curve. No bounces.

**Hover states.** Buttons darken slightly (navy → deeper navy; gold → deeper gold). Cards lift subtly. Product images scale gently (~1.03) within a clipped frame.

**Press states.** Slight scale-down (~0.98) and/or a darker fill; no colour flip.

**Transparency & blur.** Used sparingly — a translucent navy scrim over hero photography for legibility; slight backdrop blur on the sticky header once scrolled.

**Cards.** White surface, 1px warm hairline border, 10–16px radius, whisper shadow.

**Iconography.** No custom icon set in the sources; UI icons use Lucide-style thin line icons (documented substitution). No emoji, no unicode-as-icon.

---

## COLOUR TOKENS

### Lambruk Blue
| Step | Hex |
|---|---|
| 50 | #F6F6F9 |
| 100 | #E9EBF1 |
| 200 | #D1D4E5 |
| 300 | #AAB2D4 |
| 400 | #7A86C3 |
| 500 | #4B5DB4 |
| 600 | #394893 |
| 700 | #2A3879 |
| 800 | #1C2552 |
| 900 | #131A3E |
| 950 | #0D1024 |

### Lambruk Gold
| Step | Hex |
|---|---|
| 50 | #F7F5F2 |
| 100 | #EFE9E1 |
| 200 | #E3D6C5 |
| 300 | #D4BA9C |
| 400 | #C6A06C |
| 500 | #BF8C45 |
| 600 | #A07037 |
| 700 | #83572A |
| 800 | #5B3F1F |
| 900 | #3B2917 |
| 950 | #231910 |

### Neutrals & semantic aliases
| Token | Value | Use |
|---|---|---|
| `--paper` | #FBFAF7 | page background |
| `--paper-2` | #F4F1EA | alt section band |
| `--brand` | blue-900 (#131A3E) | primary navy |
| `--brand-deep` | blue-950 (#0D1024) | deepest ink |
| `--accent` | gold-500 (#BF8C45) | muted gold accent |
| `--text-strong` | blue-900 | headings |
| `--text-body` | blue-800 | body copy |
| `--text-muted` | #6B7186 | secondary text |
| `--border` | gold-200 | warm hairline |
| `--focus-ring` | gold-400 | input focus |

---

## TYPE SCALE

**Display — Instrument Serif**
| Style | Size | Line height |
|---|---|---|
| H1 | 56px | 1.02 |
| H2 | 48px | 1.05 |
| H3 | 40px | 1.1 |
| H4 | 32px | 1.15 |
| H5 | 24px | 1.25 |

**Text — Geist**
| Style | Size | Line height |
|---|---|---|
| Body Large | 18px | 1.6 |
| Body Default | 16px | 1.6 |
| Body Small | 14px | 1.55 |
| Body XSmall | 12px | 1.5 |

Eyebrow / overline: 12px, uppercase, `0.22em` letter-spacing, gold.

---

## SPACING & RADII

4px base scale: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128px. Section vertical rhythm ~96px. Container 1240px (narrow 820px).

Radii: xs 4px · sm 6px · md 10px · lg 16px · pill 999px.

---

## COMPONENTS

Reusable React primitives (`components/`), styled via the CSS tokens above:

| Component | Purpose |
|---|---|
| Button | Navy primary / outline secondary / gold accent / ghost CTA. Sizes sm–lg. |
| IconButton | Icon-only round action button (search, cart, account, menu). |
| Tag | Pill chip — allergen/diet claims, category labels. |
| Badge | Small uppercase marker — awards, "New", status. |
| Input | Labelled text field with hint/error and gold focus ring. |
| EyebrowLabel | Uppercase wide-tracked overline. |
| SectionHeading | Eyebrow + serif title + description + action link. |
| ProductCard | Shop card — image, category, serif name, price, Add. |
| Newsletter | Email capture block ("Subscribe to Seasonal Dispatches"). |

## UI KIT & TEMPLATE
- `ui_kits/website/` — full homepage recreation: header, hero, category grid, seasonal product rail with working cart, cafe feature, occasions, why-Lambruk, wholesale, high tea, newsletter, footer.
- `templates/marketing-landing/` — starter landing section composing the components above.

## ASSETS
- Logo: navy wordmark/monogram (light backgrounds) and white reversed mark (navy/photography backgrounds).
- Fonts: Instrument Serif (regular + italic), Geist variable (regular + italic).

## CAVEATS
- Food/lifestyle photography is not available — the kit uses labelled warm placeholder frames in its place.
- Icons are a documented Lucide-style substitution; no official icon set was supplied.
