# Lambruk Pantry — Design System

Lambruk Pantry is a premium Australian pantry and hospitality brand from the Northern Rivers (Ballina, NSW). It makes small-batch teas, sauces, chutneys, preserves, oils and gourmet pantry essentials, and runs a cafe, a high tea service and a wholesale/stockist program. The voice is refined French-country crossed with warm Australian country hospitality — artisanal and sophisticated, never rustic or folksy.

This system captures the brand's foundations, its reusable UI primitives, and a high-fidelity recreation of the marketing website.

## Sources provided
All sources were supplied as a mounted local folder named `Design System/`. Copies of the primary material live in `sources/`.

- `sources/l-vd.pdf` — "Lambruk visual direction": the official type scale and both full colour ramps. Transcribed verbatim into `tokens/`.
- `sources/homepage-hifi.pdf` — hi-fi homepage design (1440 × 5821px, one page). Section structure, copy and all photography come from here; the 18 embedded images were extracted losslessly into `assets/images/`.
- `sources/Lambruk Pantry - Design Guide.md` — brand-supplied written guide covering tone, casing, motion and component intent.
- `assets/lambruk-logo-blue.svg`, `assets/lambruk-logo-white.svg` — the real Lambruk wordmark + monogram (460 × 144), navy and reversed white.
- `assets/fonts/InstrumentSerif-*.ttf` — the supplied display webfont (regular + italic, OFL).
- `assets/fonts/Geist-*VariableFont_wght.ttf` — the supplied body/UI webfont (variable 100–900, upright + italic, OFL).

No Figma file, GitHub repository or product codebase was provided. The brand runs one digital surface in the sources — the marketing website — so there is one UI kit.

## Brand at a glance
- **Products:** Tea Collection · Sauces & Chutney · Preserves · Oils & Vinegars · Spices · Honey · Pantry Staples · Gift Boxes
- **Experiences:** Lambruk Pantry Cafe (Ballina) · High Tea · Wholesale / Stockist program
- **Proof points:** Multi award winning (Melbourne Royal 2024 Australian Food Awards, Bronze) · Made with real fruit · Australian ingredients · Low FODMAP · Gluten-Free · Glyphosate-Free · No Artificial Sweeteners · Top 9 Allergen-Free

---

## CONTENT FUNDAMENTALS

**Tone.** Warm, confident, editorial. It reads like a thoughtful producer talking about their craft, not a supermarket. Three themes recur: provenance ("from the Northern Rivers", "Sourced deep from Australian soil"), honesty ("a more honest pantry", "made with less sugar"), and hospitality ("country hospitality", "shared tables").

**Voice — we / you.** The brand speaks as "we" and addresses the reader as "you". "We curate life-affirming kitchen essentials." "Join us in the heart of Ballina." Inclusive and personal; never third-person corporate.

**Casing.**
- Eyebrows and overlines are ALL CAPS at 0.22em tracking: `MULTI AWARD WINNING`, `THE LAMBRUK PROMISE`, `INTRODUCING`, `NEW RELEASES`, `WHY LAMBRUK`, `CURATED OCCASIONS`.
- Headlines are sentence case in Instrument Serif: "Handcrafted pantry essentials from the Northern Rivers", "Curated for every occasion".
- Buttons and links are Title Case: "Shop Now", "Visit Our Cafe", "Reserve a table", "Become a Stockist", "View High Tea", "Shop all".
- Category and product names are Title Case: "Blood Orange & Rosemary Marmalade".

**Sentence length.** Headlines run long and unbroken — a full clause, not a slogan. Body paragraphs are one or two sentences, 20–40 words, and always finish the thought rather than trailing into a fragment.

**Phrasing examples (verbatim from the source design):**
- "Handcrafted pantry essentials from the Northern Rivers"
- "Discover handcrafted teas, sauces, chutneys, olive oils and gourmet pantry favourites made with Australian-grown ingredients, real fruit and direct partnerships with local farmers."
- "Every batch is crafted in small quantities and made with less sugar for a more honest pantry."
- "Sourced deep from Australian soil. We curate life-affirming kitchen essentials made by small-batch farmers and passionate artisans."
- "A high tea worth travelling for"
- "Bring handcrafted pantry products to your café, restaurant, hotel or retail store."

**Spelling.** Australian English throughout — "colours", "favourites", "flavour", "café". Prices in AUD with a bare dollar sign: `$18.00`.

**Emoji.** Never. The brand uses no emoji anywhere, and no unicode characters standing in for icons.

**Occasion framing.** Product is grouped by moment as often as by category: "Slow Mornings", "Entertaining", "Sunday Roast", "High Tea". When writing new merchandising copy, prefer the occasion to the taxonomy.

**Acknowledgement.** The footer carries "We acknowledge the Bundjalung Nation, Traditional Owners of the country on which we live and work" — keep it on any full site footer.

---

## VISUAL FOUNDATIONS

**Colour.** Two ramps and nothing else. **Lambruk Blue** (`--blue-*`) is a cool navy/ink ramp carrying all text, the deep bands and the footer; 900 `#131A3E` is the signature navy and 950 `#0D1024` the ink. **Lambruk Gold** (`--gold-*`) is a warm muted gold; 500 `#BF8C45` is the accent, used sparingly for eyebrows, hairlines, small marks and one CTA per view. Gold is a seasoning, not a base. Large fields are warm papers — `--paper` `#FBFAF7` and `--paper-2` `#F4F1EA` — never clinical white. A view uses at most two background colours: paper plus either the alt paper or navy.

**Typography.** Instrument Serif carries every display and heading — a light, high-contrast serif with a French-editorial feel, set large with tight line-heights (1.02 at 56px) and negative tracking. It ships one weight, so hierarchy comes from size, not weight; italics are the only emphasis inside a headline ("made with *less sugar*"). Geist carries all body, UI, labels and eyebrows at 400–600. Eyebrows are 12px caps at 0.22em tracking in gold. Body sits at 16–18px / 1.6 with a 640–820px measure.

**Spacing & layout.** Whitespace is the point. 4px base scale (4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128). Section vertical rhythm is 96px top and bottom. A 1240px centred container with 40px gutters; prose narrows to 820px. Full-bleed bands alternate paper → alt paper → navy → photography. Few elements per row: three category tiles, four occasion cards, five products in a scrolling rail.

**Backgrounds.** Warm solid paper fields, navy bands, and tactile full-bleed food photography for the hero and feature panels. No gradients as decoration, no patterns, no textures beyond the photography itself. The only gradients in the system are protection scrims over imagery.

**Imagery.** Warm-toned, natural side light, shallow depth of field, real surfaces — timber, linen, stone. Food is styled but not fussy; jars carry the real Lambruk label. No cool or desaturated grading, no heavy grain, no black-and-white. Hero photography is 16:9; category tiles are 1:1; occasion cards are 3:4; product cards are 4:3.

**Protection.** Text over photography always sits on a scrim, never on the bare image. Two patterns: a left-to-right navy gradient for the hero (`rgba(13,16,36,.72)` → `.18`), and a bottom-up three-stop gradient for cards and panels (transparent at 28% → `rgba(13,16,36,.46)` at 56% → `rgba(13,16,36,.86)` at 100%). Start the ramp high enough that a caption wrapping to two lines still lands inside it. Capsules and label chips are not used to protect text.

**Borders.** Warm hairlines at 1px — `--border` (gold-200 `#E3D6C5`) on cards, dividers and inputs; `--border-on-dark` (gold at 28% alpha) on navy. Quiet, never structural.

**Radii.** Restrained: xs 4 · sm 6 · md 10 · lg 16 · pill 999. Cards use 16px, buttons and inputs 6px, chips and the cart badge a full pill. Never blobby.

**Shadows.** Warm navy-tinted and low: `--shadow-whisper` `0 1px 2px rgba(13,16,36,.04)` at rest, `--shadow-card` `0 8px 24px rgba(13,16,36,.08)` on hover, `--shadow-lift` for drawers. Cards lean on the hairline; the shadow is a hint, not elevation. No inner shadows anywhere except the paper Badge's inset hairline.

**Motion.** Calm and editorial — fades and short position shifts on `cubic-bezier(.22,.61,.36,1)`. 140ms for colour, 240ms for the default transition, 420ms for image scale and the cart drawer. No bounce, no spring, no overshoot, no entrance animations on scroll.

**Hover states.** Buttons darken their fill (navy → `--brand-deep`, gold → gold-600); the secondary button warms to gold-100 and its border steps to gold-300. Links move to gold. Cards translate up 2px and step from whisper to card shadow. Photography inside a clipped frame scales to 1.03 over 420ms. Icon buttons take a warm tint circle.

**Press states.** `scale(0.98)` and the hover fill held. No colour flip, no ring.

**Focus.** A gold focus ring — 1px `--focus-ring` border plus a 3px `rgba(198,160,108,.22)` halo. Never a browser-default blue outline.

**Transparency & blur.** Sparingly and only for legibility: the navy scrims over photography, `rgba(247,245,242,.06)` fills for chips and inputs on navy, and a `saturate(140%) blur(10px)` backdrop on the header once the page scrolls past 24px. This is not a glassmorphism system — nothing floats on frosted panels.

**Cards.** White surface, 1px gold-200 hairline, 16px radius, whisper shadow, image clipped at the top with no inner padding. Product cards read: photo → gold category eyebrow (12px caps) → serif name (24px) → price and Add pushed to the bottom. Gallery-like and quiet.

**Fixed elements.** Only two: the sticky header (88px) and the right-hand cart drawer (420px, slides in over a `rgba(13,16,36,.46)` scrim). No floating action buttons, no sticky CTAs, no cookie-style bars.

---

## ICONOGRAPHY

The brand's visual language is typography- and photography-led, and icons are deliberately scarce — a handful in the header, a chevron or arrow in section actions, contact glyphs in the cafe block, and social marks in the footer. There is **no icon font, SVG sprite or icon set in the provided sources**; the only true brand mark is the Lambruk wordmark/monogram.

**Substitution (flagged).** UI icons in this system use **Lucide** (`https://unpkg.com/lucide@0.460.0`, UMD) at 18–22px with a **1.5px stroke** — thin, open, geometric, and the closest available match to the refined editorial feel. Set them in `--text-strong` on paper and `--gold-50` on navy; gold is reserved for icons that act as accents (the arrow in a category tile, the pin and clock in the cafe block). If Lambruk has an official icon set, drop it into `assets/icons/` and it replaces Lucide wholesale.

Glyphs in use: `search`, `user`, `shopping-bag`, `menu`, `x`, `chevron-left`, `chevron-right`, `arrow-right`, `map-pin`, `clock`, `trash-2`, `instagram`, `facebook`, `mail`.

**Never:** emoji, unicode characters as icons, filled/duotone icon styles, or hand-drawn SVG approximations of a real brand mark.

### Illustration
Separate from UI icons, the brand ships a small set of hand-drawn provenance marks in `assets/illustrations/` — loose, single-weight line drawings with a woodcut/botanical-plate feel. Five subjects, each in two cuts (transparent PNG, 400 × 400):

| Subject | Files | Stands for |
|---|---|---|
| Seedling in soil | `seedling-gold.png` · `seedling-ink.png` | Growing, soil, farm partnerships |
| Fruit bowl | `fruit-bowl-gold.png` · `fruit-bowl-ink.png` | Abundance, shared tables, gift boxes |
| Stone fruit, halved | `stone-fruit-gold.png` · `stone-fruit-ink.png` | Real fruit, preserves and marmalades |
| Preserve jar | `preserve-jar-gold.png` · `preserve-jar-ink.png` | Small-batch craft, the product itself |
| Australia | `australia-gold.png` · `australia-ink.png` | Australian-grown ingredients, provenance |

**Usage.** The gold cut is the default and the only cut used on navy; the ink cut is for paper fields and print. Set them at 64–120px — beside a proof point, above a promise column, as the mark on an empty state or a divider. One illustration per section, and never more than a handful across a page: they are punctuation, like gold itself. Do not recolour them, add fills, place them on photography, or enlarge one into a hero graphic. Where an illustration and an award mark both apply, the award mark wins.

**Award marks.** The Melbourne Royal 2024 Australian Food Awards Bronze medal (`assets/images/award-melbourne-royal-bronze-2024.png`) appears small — around 112px — anchored in a hero corner or beside proof-point copy. It is never enlarged into a hero graphic.

---

## INDEX

| Path | What it is |
|---|---|
| `styles.css` | Root entry — `@import`s every token and font file. Consumers link this one file. |
| `tokens/fonts.css` | Self-hosted `@font-face` for Instrument Serif and Geist; font-family aliases. |
| `tokens/colors.css` | Both ramps, surfaces, brand, text, line and interaction aliases. |
| `tokens/typography.css` | Display and body scales, eyebrow spec, measures. |
| `tokens/spacing.css` | 4px scale, section rhythm, radii. |
| `tokens/effects.css` | Shadows, easing, durations, interaction deltas, blur. |
| `guidelines/` | 22 foundation specimen cards (Colors · Type · Spacing · Brand). |
| `components/` | Reusable React primitives — see below. |
| `ui_kits/website/` | Homepage recreation. `README.md` maps every section file. |
| `templates/marketing-landing/` | "Marketing Landing" starting folder for consuming projects. |
| `assets/` | Logos, extracted photography (`images/`), hand-drawn marks (`illustrations/`), fonts (`fonts/`). |
| `sources/` | The original supplied PDFs and written guide. |
| `SKILL.md` | Agent-Skills-compatible entry point. |

### Components
Inventory derived from the homepage design — every family below appears in the source. Nothing was invented.

| Component | Directory | Purpose |
|---|---|---|
| `Button` | `components/actions/` | Navy primary, hairline secondary, gold accent, reversed onDark, ghost. Sizes sm/md/lg. |
| `IconButton` | `components/actions/` | Round icon-only action — search, account, cart, menu. |
| `EyebrowLabel` | `components/content/` | Uppercase gold overline, 12px / 0.22em. |
| `SectionHeading` | `components/content/` | Eyebrow + serif title + description + trailing action. |
| `Tag` | `components/content/` | Pill chip for dietary claims and categories. |
| `Badge` | `components/content/` | Small uppercase marker — "New", award and status flags. |
| `Input` | `components/forms/` | Labelled field with hint/error and a gold focus ring. |
| `Newsletter` | `components/forms/` | Centred "Subscribe to Seasonal Dispatches" capture block (footer/dark contexts). |
| `ProductCard` | `components/commerce/` | Shop tile — photo, category, serif name, price, Add. |

Each directory carries `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` showcase HTML.

**Intentional additions:** none. The homepage's cart drawer and header live in the UI kit rather than as primitives, because the source shows one instance of each.

---

## CAVEATS
- **Geist Mono is not shipped.** Geist (upright + italic, variable) is self-hosted, but no mono cut was supplied, so `--font-mono` falls back to the system monospace stack. It is only used for SKUs and spec values.
- **Icons are a substitution.** Lucide at 1.5px stroke stands in for an icon set the sources do not contain. The hand-drawn illustrations in `assets/illustrations/` are brand-supplied and real, but they are not UI icons and do not replace Lucide.
- **One surface only.** The sources cover the marketing homepage. Shop listing, product detail, checkout, Our Story, Contact and the wholesale application are not designed here and were not invented.
- **Homepage geometry is inferred.** Text and imagery were extracted from the hi-fi PDF losslessly, but the page could not be rasterised for pixel measurement; spacing follows the documented 4px scale and 96px section rhythm rather than measured offsets.
