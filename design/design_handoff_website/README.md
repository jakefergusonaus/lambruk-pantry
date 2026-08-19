# Handoff: Lambruk Pantry Website (Desktop + Mobile)

## Overview
A clickable prototype of the Lambruk Pantry marketing and commerce site: homepage, shop with occasion curation, product detail, cafe (with high tea booking), wholesale/stockist, our story, contact, and customer care (shipping/returns/terms). Built for both desktop and mobile viewports, with a working cart drawer and forms throughout.

## About the Design Files
The files in this bundle are **design references built in HTML** — prototypes showing intended layout, copy, and behavior, not production code to copy directly. The task is to **recreate these designs in Shopify** (Liquid templates/sections, theme JS, and Shopify's cart/checkout APIs), following Shopify theme conventions rather than porting the HTML/React-ish markup as-is. Where the prototype fakes something client-side (cart drawer, forms, product data), replace it with real Shopify objects, sections, and Ajax Cart API calls.

## Fidelity
**High-fidelity.** Colors, typography, spacing and copy are final (copy for shipping/returns/terms is verbatim from the client's live Shopify policies). Product photography is design-system placeholder imagery pending the client's own photo shoot — swap for real product photos before launch. High tea pricing is still a placeholder (`[Price] per guest`) — needs the real number before launch.

## Files
- `LambrukPantry Desktop.dc.html` — full desktop site, all 8 pages/states in one file (open in a browser; it's a single-page app driven by internal state, defaults to the homepage).
- `LambrukPantry Mobile.dc.html` — same site, mobile layout (390px reference width).
- `Site Map.dc.html` — visual sitemap / information architecture diagram.
- `assets/` — logo (navy + white SVG), category/hero/product photography (placeholder), hand-drawn provenance illustrations (real, client-supplied).
- `design-system-tokens/` — the source-of-truth CSS custom properties (colors, type scale, spacing, effects) and fonts referenced by the HTML. Use these values (or Shopify theme settings mapped to them) rather than re-guessing colors from screenshots.

Each `.dc.html` is a single self-contained file — open directly in a browser. Every page lives in the same file, gated behind an internal `page` state value (`home`, `shop`, `product`, `cafe`, `wholesale`, `story`, `contact`, `policies`, plus a `notfound` state) — search the file for `isHome`, `isShop`, etc. to find each page's markup, and `nav(page, extra)` in the script for how navigation works.

## Screens / Views

### 1. Home (`isHome`)
- Sticky header (88px): logo, nav (Shop / Cafe / Wholesale / Our Story / Contact), search/account/cart icons.
- Hero: full-bleed photo, left-aligned navy scrim, "Multi Award Winning" eyebrow, serif H1 "Handcrafted pantry essentials from the Northern Rivers", intro paragraph, Shop Now (primary) + Visit Our Cafe (reversed outline) buttons.
- Proof bar: dietary/quality claims as a thin strip (Low FODMAP, Gluten-Free, etc.) — togglable via `showProofBar` prop.
- Explore by category: 3 image tiles (1:1), bottom-scrim caption (Tea Collection, Sauces & Chutney, Pantry Staples).
- The Lambruk Promise: navy full-bleed band, centered serif statement with 3 inline gold illustrations (fruit bowl, Australia, seedling).
- Lambruk Pantry Cafe intro: copy + address + hours, paired image.
- The Seasonal Spotlight: 5-across product rail, ProductCard pattern (photo → eyebrow → serif name → price/Add).
- Why Lambruk: navy band, serif statement with jar + peach illustrations, italic emphasis on "less sugar".
- Curated for every occasion: 4 cards (3:4), Slow Mornings / Entertaining / Sunday Roast / High Tea, each linking into shop filtered by occasion.
- Loved at country tables: customer review carousel.
- Wholesale + High Tea pairing: 2-up panel, secondary buttons to each page.
- Not sure what to pick: navy CTA band → sample box.
- Footer (see below).

### 2. Shop (`isShop`)
- Occasion landing (default) vs. occasion-active view (`occasionPlain` / `occasionActive`), driven by `occasion` state.
- Category filter pills (All / Tea / Sauces & Chutneys / Pantry & Gifts).
- 3-column product grid, ProductCard pattern, Add-to-cart from the card.
- "Set another table" cross-links to other occasions.
- Sell-the-moment CTA band → gift/sample box.

### 3. Product detail (`isProduct`)
- Breadcrumb, gallery, serif product name (46px), rating, price, variant, Add to Cart.
- 3-up sourcing/trust row with Lucide-style line icons (Sustainably sourced / Freshness secured / Low sugar).
- Customer reviews.
- "From the same shelf" related products (3-up), pulled from same category.

### 4. Cafe (`isCafe`)
- Hero, "Reserve your table" booking aside — two modes via `cafeBookingMode` prop: `phone` (call/SMS card, real number 0458 370 757, hours 8:30 AM–5:00 PM) or `widget` (inline date/time/party-size form) — pick one for production, don't ship both.
- High Tea section: "High Tea worth lingering over" — **pricing placeholder, needs real number**.
- "Pull Up a Chair" cafe copy, address: Shop 8, 216–234 River Street, Ballina NSW 2478.
- Gallery grid (3-up).
- "Bring the Lambruk experience home" → shop CTA.

### 5. Wholesale (`isWholesale`)
- Intro + "Traceable to the grower" provenance copy.
- "Who we supply" numbered list of suitable venue types.
- Wholesale enquiry form (business name, contact, volume, message) — currently client-side only; wire to a real lead-capture endpoint.

### 6. Our Story (`isStory`)
- Brand narrative, "How we make things" 3-column process explainer, awards mention (Melbourne Royal 2024 Bronze).

### 7. Contact (`isContact`)
- Contact form (name, email, subject, message) — client-side only in the prototype; wire to a real endpoint.
- Cafe address/hours, phone, email, social links (Instagram/Facebook link to the brand's real accounts).

### 8. Customer Care / Policies (`isPolicies`)
- Three anchored sections on one page: Shipping, Refunds & Returns, Terms of Service — copy is **verbatim from the client's live Shopify policies**, reachable via footer links (`goShipping`, `goRefunds`, `goTerms`) that deep-link with a scroll-to-anchor.
- No privacy policy section — none exists on the live site; add one if/when the client provides it.

### Page not found (`is404`)
- Centered empty state: preserve-jar illustration, "This page has left the shelf" heading, Back to Home / Browse the Shop buttons, quick links row. Togglable in preview via the `showNotFound` prop — wire this to a real Shopify 404 template.

### Persistent elements (every page)
- **Header** (88px, sticky, blurs on scroll past 24px): wordmark, primary nav, search/account/cart icon buttons, cart item-count badge.
- **Cart drawer** (420px, right-side, `rgba(13,16,36,.46)` scrim): line items with qty controls, subtotal, checkout button, empty state.
- **Footer** (navy, `#131A3E`): logo + brand blurb, Shop / Visit / Care link columns, social icons (Instagram, Facebook → live accounts), "Proudly based on Wurundjeri Country" acknowledgement.

## Interactions & Behavior
- All navigation is client-side state (`this.nav('page', {...})`) — in Shopify this becomes real page routing (Liquid templates + URLs), not a SPA state machine.
- Add-to-cart updates the cart drawer's item list and subtotal instantly (client-side demo state) — replace with Shopify's Ajax Cart API (`/cart/add.js`, `/cart/update.js`) so it persists across page loads.
- Cart drawer opens on add-to-cart and via the header cart icon; closes on scrim click or explicit close.
- Occasion cards and category tiles are click-through, not hover-reveal.
- Motion is intentionally minimal per the design system: fades and short position shifts only (`cubic-bezier(.22,.61,.36,1)`), no scroll-triggered entrance animations, no bounce/spring.
- Hover: buttons darken fill; secondary buttons warm to gold-100 fill with gold-300 border; cards lift 2px with a shadow step; photography scales to 1.03 in clipped frames.
- Focus: gold ring (1px border + 3px soft halo), never a browser-default outline.
- Forms (contact, wholesale enquiry) show an inline success state client-side; wire to real submission handling (Shopify contact form / a lead capture app / email).

## State Management
Reference `state` in the `Component` class in each `.dc.html`:
- `page`, plus per-page extras (`filter`, `occasion`, `product` id) for shop/product routing — becomes real Shopify URL routing.
- `cartOpen`, `cart` (array of line items) — becomes Shopify's cart object + Ajax Cart API.
- `contactSent`, `enquirySent` — form submission success flags.
- `menuOpen` (mobile only) — mobile nav drawer toggle.

## Design Tokens
Full source of truth is in `design-system-tokens/` (`colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `styles.css`). Key values:
- **Navy** `#131A3E` (primary/signature, also the footer), **ink** `#0D1024` (deepest, reserved), **gold** `#A07037` (accent, 600 — eyebrows and links darkened from the base 500 for contrast), gold-200 `#E3D6C5` (hairline borders), gold-100/300 for hover states.
- **Paper** `#FBFAF7`, **paper-2 (alt)** `#F4F1EA` — no pure white as a large field.
- **Type**: Instrument Serif for all display/headings (one weight, hierarchy via size only; italic for emphasis); Geist for body/UI/labels/eyebrows (400–600). Eyebrows: 12px caps, 0.22em tracking, gold.
- **Spacing**: 4px base scale; section rhythm 96px top/bottom; 1240px container, 40px gutters; prose measure 640–820px.
- **Radii**: cards 16px, buttons/inputs 6px, chips/pills 999px.
- **Shadows**: whisper `0 1px 2px rgba(13,16,36,.04)` at rest, card `0 8px 24px rgba(13,16,36,.08)` on hover.
- **Icons**: Lucide (1.5px stroke) stands in for UI icons — no official icon set exists; swap if the client supplies one.

## Assets
- `assets/lambruk-logo-blue.svg`, `assets/lambruk-logo-white.svg` — real Lambruk wordmark, both colourways.
- `assets/images/` — hero and category/product photography — **design-system placeholders**, swap for the client's own photography shoot before launch.
- `assets/illustrations/` — hand-drawn line marks (seedling, fruit bowl, peach, Australia, preserve jar), each in gold and ink cuts — real, client-supplied. See `assets/illustrations/README.md` for usage.

## Open Items Before Launch
- High tea per-guest pricing (currently `[Price] per guest`).
- Real product photography to replace design-system placeholder imagery.
- Privacy policy — none exists on the live site; confirm with client whether one is needed.
- Decide cafe booking mode for production (phone-only vs. inline booking widget) — the prototype ships both behind a prop but only one should go live.
- Wire contact and wholesale enquiry forms to a real destination (Shopify's native contact form, or an app).
