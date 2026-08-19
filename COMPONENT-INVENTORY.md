# Component & Page Inventory — Lambruk Pantry

Source: `design/design_handoff_website/` — the full 8-page clickable prototype (`LambrukPantry Desktop.dc.html`, `LambrukPantry Mobile.dc.html`, `Site Map.dc.html`, `README.md`), read in full, cross-checked against `design/DESIGN-TOKENS.md` and this repo's existing `blocks/`, `sections/`, `snippets/`.

**Supersession note.** `design/Lambruk Pantry Design System/uploads/` (the earlier `LambrukPantry.dc.html` + `ui_kits/website/*.jsx`) is a homepage-only ancestor of this package — same design system, fewer pages. `design_handoff_website/` is the current, complete, "high-fidelity" source per its own README (copy is final; product photography and high-tea pricing are placeholders). Treat `design_handoff_website/` as canonical from here; the older upload is superseded, not a second source of truth.

No files under `blocks/`, `sections/`, or `snippets/` were touched to produce this — read-only inventory, per the request.

---

## 1. Pages in the prototype

| # | Page | State flag | Notes |
|---|---|---|---|
| 1 | Home | `isHome` | |
| 2 | Shop | `isShop` | Two sub-states: `occasionPlain` (default listing) / `occasionActive` (filtered by an occasion, own hero) |
| 3 | Product detail | `isProduct` | Single template, all products share it |
| 4 | Cafe | `isCafe` | Booking panel has two mutually-exclusive modes (`phone` / `widget`) — ship one |
| 5 | Wholesale | `isWholesale` | |
| 6 | Our Story | `isStory` | |
| 7 | Contact | `isContact` | |
| 8 | Customer Care / Policies | `isPolicies` | One page, three anchored sections (Shipping / Refunds / Terms) |
| — | 404 | `is404` | Toggled via a preview prop, not real routing in the prototype |

Persistent on every page: **Header** (sticky, 88px desktop / 64px mobile), **Footer**, **Cart drawer** (right-side panel desktop / bottom sheet mobile), **mobile nav drawer** (left slide-in, mobile only).

---

## 2. Distinct components — inventory, page occurrence, Horizon mapping

Many sections that read as distinct in the prototype are the same underlying shape reused with different content — grouped here so the same thing isn't built twice under two names. "Horizon match" is what already exists in this repo's `blocks/`/`sections/`/`snippets/`.

### Persistent / chrome

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Header (logo, nav, search, cart icon + count) | Every page | `sections/header.liquid`, `sections/header-announcements.liquid` | **Native** — settings-level adapt. Note: prototype's own header markup only renders search + cart icons, no account icon, despite the README's page-by-page prose claiming "search/account/cart" — flag this discrepancy back to the client/designer rather than silently picking one. |
| Mobile nav drawer (left slide-in, 330px) | Every page, mobile | `snippets/header-drawer.liquid` | **Native** |
| Search | Header icon, all pages | `sections/search-header.liquid`, `sections/predictive-search.liquid`, `sections/predictive-search-empty.liquid`, `snippets/_search-input.liquid` | **Native** |
| Footer (logo/blurb, 3 link columns, legal row, social, Akima credit) | Every page | `sections/footer.liquid` + `footer-group.json`, `blocks/footer-copyright.liquid`, `blocks/footer-policy-list.liquid` | **Native** — settings-level adapt |
| Cart drawer, right-side panel | Every page, desktop | `sections/cart-drawer-section.liquid` | **Native** |
| Cart drawer, bottom sheet (390px, rounded top, 86vh max-height) | Every page, mobile | Same section, no bottom-sheet mobile variant found in current CSS | **Adapt** — needs a mobile-specific style pass, not a new block |

### Home

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Hero (H1, subcopy, 2 buttons, image, absolute-positioned award badge) | Home | `sections/hero.liquid` | **Native** — adapt (award badge overlay is a small custom touch) |
| Proof bar (dietary claims strip, togglable) | Home | `blocks/icon.liquid` + `group` composed in `sections/section.liquid` | **Native**, composed |
| "Explore by category" — 3 image tiles, 1:1, bottom scrim, linked | Home, (variant on Cafe — see below) | `blocks/_collection-image.liquid`, `_collection-card.liquid`, `collection-card.liquid`, `sections/collection-list.liquid` | **Adapt** — scrim + serif-caption treatment on top of native collection-card |
| Navy quote band w/ inline illustration(s), centered serif statement | Home ×2 ("The Lambruk Promise", "Why Lambruk"), see also Story/Shop/Cafe "flat" variant below (different shape) | **This repo's own `blocks/quote-panel.liquid`** (already built) | **Native to this project** — direct reuse. Known gap: quote-panel currently supports one trailing illustration; the prototype embeds 2–3 illustrations *inline mid-sentence* at specific words (see session history) — accept the one-illustration limitation or revisit if the client pushes back. |
| 2-up media + copy band (image one side, heading/copy/list/button other side) | Home ("Lambruk Pantry Cafe" intro), Cafe (High Tea feature, Pull Up a Chair), Wholesale (Traceable to the grower), Story (Meet Paige) — **5 instances, same shape, alternating image side** | `sections/media-with-content.liquid` | **Native** — direct match |
| ProductCard (image, category eyebrow, serif name, price, Add, optional badge) | Home (Spotlight rail), Shop (grid), Product (Related) — **reused 3×** | `blocks/product-card.liquid`, `_product-card.liquid`, `snippets/product-card.liquid`, `product-card-styles.liquid`, `product-badges-styles.liquid` | **Native** — direct match |
| Horizontal-scroll product rail | Home (Spotlight) | `sections/carousel.liquid` or `product-grid.liquid` with overflow-x | **Native**, adapt |
| Star rating (filled/half/empty, 5-icon row) | Spotlight cards, review cards, product page — **reused everywhere reviews appear** | `blocks/review.liquid` — reads `product.metafields.reviews.rating`, matches the Shopify Product Reviews metafield namespace | **Native** — this is app-dependent (a reviews app must be installed and writing to that metafield; copy explicitly says "Reviews powered by Judge.me") |
| "Curated for every occasion" — 4 cards, 3:4, italic serif title + blurb, bottom scrim | Home, Shop ("Set another table" — same shape, 3 cards instead of 4) | Same collection-card primitives as "Explore by category" | **Adapt** |
| Review card grid (3-up, star + title + body + name·verified) | Home ("Loved at country tables") | No direct block; compose from `group`/`text` blocks, or wait on the reviews app's own theme block | **New** (light) — or defer to whatever the reviews app ships |
| 2-up linked panel card (image top, heading/copy/button, white card w/ shadow) | Home ("Wholesale + High Tea pairing" — 2 instances of one shape) | `_card.liquid` composed with `media-with-content`-style children | **Adapt** |
| Navy CTA band — flat, no illustration, flex row (heading left, button(s) right) | Home ("Not sure what to pick"), Shop ("Sell the moment"), Story ("Taste the range") — **3 instances, same shape** — **distinct from the quote-panel band above, don't conflate the two** | `group` block (`background_color`) + `_heading` + `button`, composed in `sections/section.liquid` | **Native**, composed — no new block needed |
| Subscribe / email capture band | Home, Cafe — **identical markup both places** | `blocks/email-signup.liquid` | **Native** — direct match |

### Shop

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Shop intro banner — plain (eyebrow, H1, subcopy) | Shop, default state | Standard collection banner, `sections/main-collection.liquid` header area | **Native** |
| Occasion hero — full-bleed image, scrim, breadcrumb-style back-link, italic H1, blurb | Shop, occasion-filtered state | Custom scrim treatment over `sections/main-collection.liquid`'s banner | **Adapt** |
| Category filter pills (All/Tea/Sauces & Chutneys/Pantry & Gifts) | Shop | `blocks/filters.liquid` | **Native** — direct match, though the design's pill styling and the plain 4-value taxonomy may need settings-level styling adjustment |
| Product grid, 3-col | Shop | `sections/main-collection.liquid` + `snippets/product-grid.liquid` | **Native** |
| Occasion filtering itself (client-side product-id lists in the prototype) | Shop, occasion state | No native equivalent — client-side demo data | **New** — needs real collections or a tag/metafield-driven filter, not just UI |

### Product detail

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Breadcrumb | Product | Not found anywhere in `blocks/`/`snippets/` | **New** (small) |
| Gallery (main image + 3 thumbnails) | Product | `sections/featured-product-information.liquid` (`_featured-product-gallery.liquid`) | **Native** |
| Product info (name, rating, price/variant, description, claim tags, qty stepper, Add to Cart, shipping note, 3-item info list) | Product | `product-title`, `_featured-product-price`, `variant-picker`, `product-description`, `blocks/quantity.liquid`, `buy-buttons`/`add-to-cart`, `blocks/sku.liquid`, `blocks/price.liquid` — all exist | **Native**, composed |
| Claim tags (Gluten-Free, Made With Real Fruit, etc.) | Product | `x-import ... Tag` in the prototype → Horizon's `blocks/swatches.liquid` doesn't fit; a small badge/tag pattern — check `product-badges-styles.liquid` for reuse | **Adapt** (small) |
| Sourcing trio — icon in badge, heading, copy, 3-col | Product | `blocks/icon.liquid` + `_heading`, composed | **Native**, composed |
| Reviews (aggregate card: big number, stars, rating-basis text, 5-bar histogram; review list: name/verified/date/title/body; Load more; Write a Review) | Product | `blocks/review.liquid` covers the star display only; histogram bars, aggregate card layout, and review list are not in this repo | **New**, except the star rating itself. Strongly recommend checking what theme block a reviews app (Judge.me) ships before building this by hand — apps in this class usually provide their own block. |
| "From the same shelf" related products | Product | `sections/product-recommendations.liquid` + `blocks/product-recommendations.liquid` (Shopify's native recommendation API) | **Native** — direct match |

### Cafe

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Cafe hero (full-bleed, scrim, centered, 2 buttons) | Cafe | `sections/hero.liquid` | **Native**, adapt |
| Booking panel — map placeholder + address/hours | Cafe | Static content, `sections/section.liquid` composed | **Native**, composed. Note: prototype literally places a "Google Maps embed" placeholder — decide whether that ships as a real embed or stays a static image/address block. |
| Booking panel — phone mode (number, Call/Text buttons) | Cafe | `group`/`button` composed | **Native**, composed |
| Booking panel — widget mode (date/time/guest-count selects, submit) | Cafe | No native equivalent (fake `<div>`s in the prototype, not real inputs) | **New** — and per the README, only one of phone/widget mode ships to production; confirm which before building either |
| High Tea feature, Pull Up a Chair | Cafe | `media-with-content` (counted above) | **Native** |
| Gallery mosaic (asymmetric spans, 8-image grid) | Cafe | No direct match — Horizon's image/media blocks don't do asymmetric `grid-column: span` layouts out of the box | **New** (layout-only; images themselves are standard) |
| "Bring the Lambruk experience home" — copy + button + 3 tiles w/ arrow icon | Cafe | Same collection-card primitives as Home's category tiles, third variant of that shape | **Adapt** |
| Subscribe band | Cafe | Counted under Home | **Native** |

### Wholesale

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Wholesale hero (centered) | Wholesale | `sections/hero.liquid` or plain banner | **Native** |
| Wholesale Benefits — 3-col icon cards | Wholesale | Same icon+heading+copy shape as Sourcing trio / How we make things — **3rd instance of this pattern** | **Native**, composed |
| Traceable to the grower — 2-up + checklist | Wholesale | `media-with-content` + `blocks/icon.liquid` list | **Native**, composed |
| Who we supply (numbered list) / Packaging Formats (spec list) | Wholesale | Plain text/group composition | **Native**, composed |
| Wholesale enquiry form — business name/contact/email/phone/type/location fields, interest multi-select pills, message textarea, success state | Wholesale | `blocks/contact-form.liquid` only supports Shopify's native fixed fields (name, email, phone, body) — no business-type/location/multi-select | **New** — the extra structured fields exceed native Shopify contact-form capability; needs either a forms app, metafield-backed custom form handling, or folding extra fields into the message body via hidden inputs |

### Our Story

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Story hero (centered) | Story | Plain banner | **Native** |
| Full-bleed story image | Story | `blocks/image.liquid` | **Native** |
| Meet Paige — 2-up bio | Story | `media-with-content` | **Native** |
| How we make things — 3-col icon cards | Story | Same icon+heading+copy shape, 3rd instance | **Native**, composed |
| "Taste the range" CTA band | Story | Same flat navy CTA band as Home | **Native**, composed |

### Contact

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Contact hero | Contact | Plain banner | **Native** |
| Contact info columns (General / Cafe / Wholesale, border-top divider, optional button) | Contact | `group`/`text`/`button` composed | **Native**, composed |
| Contact form (name, email, topic pill-select, conditional wholesale sub-form, message, success state) | Contact | `blocks/contact-form.liquid` covers name/email/phone/message natively; the topic-pill UI and conditional wholesale sub-fields do not | **Adapt + New** — base form is native, the pill-select and conditional field reveal are custom, and the wholesale sub-fields share the same gap noted above |

### Policies

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| Policies hero + 3 anchor links | Policies | Plain banner | **Native**, composed |
| Shipping / Refunds / Terms content, incl. shipping-rates table | Policies | Shopify has **native legal pages** (`shop.shipping_policy`, `refund_policy`, `terms_of_service`, etc.) — the copy is verbatim from the client's live policies per the README | **Native** — this content belongs in Shopify's Legal settings, not hand-built into a page block. The rates table is the only piece needing real markup. |

### 404

| Component | Appears on | Horizon match | Classification |
|---|---|---|---|
| 404 empty state (illustration, eyebrow, H1, copy, 2 buttons, quick-links row) | 404 | `sections/main-404.liquid` | **Native** — direct match, adapt content |

---

## 3. Summary — cheap wins vs. real build

**Fully native, settings/composition only** (no new Liquid beyond what's already in this repo): Header, footer, search, mobile nav drawer, hero, media-with-content (×5 reuse), collection filters, product grid, ProductCard (×3 reuse), product info/gallery/buy-buttons, related products, star ratings (app-dependent), email signup, icon+heading+copy 3-col (×3 reuse), flat navy CTA band (×3 reuse), 404, policy page content.

**This project's own existing block, direct reuse:** `quote-panel.liquid` for the two navy illustrated-quote bands.

**Needs adaptation** (native primitive exists, needs a real styling/behavior pass): cart drawer mobile bottom sheet, collection-card scrim treatment (×3 shape variants), occasion hero banner, claim tags, contact form's pill-select + conditional reveal.

**Genuinely new build:** breadcrumb, occasion filtering logic (real collections/tags, not client-side arrays), reviews aggregate card + histogram + list (pending a check of what the reviews app itself ships), cafe booking widget-mode inputs, gallery mosaic grid, wholesale enquiry form's extra fields.

---

## 4. Suggested build order — cheapest and most-reused first

Ordered so early work is reused by everything after it, and expensive/uncertain items (app-dependent, or needing a client decision) land last so they don't block the pages around them.

1. **Header, footer, cart drawer (desktop), 404** — pure settings/config on sections that already exist exactly as needed. Zero new code, unblocks every other page's chrome immediately.
2. **`media-with-content` pass** — one native section, reused 5× (Home cafe-intro, Cafe ×2, Wholesale, Story). Get the image/copy/list/button shape right once here and every one of those five pages inherits it.
3. **Icon+heading+copy 3-col pass** — reused 3× (Product sourcing trio, Wholesale benefits, Story "how we make things"). Same reasoning as #2.
4. **Flat navy CTA band** — reused 3× (Home, Shop, Story), pure composition, no new block.
5. **ProductCard + product grid + filters** — native blocks, but this is the load-bearing commerce component reused 3× (Spotlight, Shop grid, Related) — worth locking down early since Shop and Product both depend on it.
6. **Quote-panel band** — already built this session; just place it in the two Home slots (Promise, Why Lambruk) and confirm the single-illustration limitation is acceptable.
7. **Collection-card / image-tile scrim treatment** — one adaptation pass, reused across 3 shape variants (category tiles, occasion cards, cafe category tiles). Do this once other native pieces are settled since it's the first real "adapt" work, not pure composition.
8. **Product detail page assembly** — gallery, info block, claim tags, sourcing trio (from #3), related products (from #5). Breadcrumb is the one small net-new piece here.
9. **Policies page** — wire to Shopify's native legal pages rather than hand-building; low effort once you confirm the client's policy text is already live there (it should be, per the README's "verbatim from live policies" note).
10. **Cart drawer mobile bottom sheet** — a styling pass on #1's foundation, sequenced after the rest of mobile layout is stable so it isn't redone.
11. **Occasion filtering (real data model)** — decide collections vs. tags vs. metafields before building the Shop occasion views; this gates several Shop-page and Home cross-link components, so resolve the data model early within this phase even though the visual shell (from earlier steps) can go first.
12. **Contact form + pill-select + conditional reveal** — adapts the native form; do after the flat CTA/composition patterns above since it reuses the same pill-toggle control needed by wholesale.
13. **Wholesale enquiry form** — the same pill-toggle control as #12, plus the extra structured fields that exceed native contact-form capability. Sequenced last among forms because it needs a decision (forms app vs. custom handling) that contact's simpler form doesn't.
14. **Reviews (aggregate card, histogram, review list, review-card grid on Home)** — deliberately last: check what theme block the reviews app (Judge.me, per the prototype's own copy) provides before hand-building any of this. Building it custom first and discovering the app ships its own block would be wasted work.
15. **Cafe booking widget-mode + gallery mosaic** — lowest priority: booking mode needs a client decision (phone vs. widget, README explicitly says ship only one), and the gallery mosaic is a one-off layout with no reuse elsewhere.

---

## Open items surfaced while reading (not part of the four asks, flagging for the record)

- Header markup in the prototype has no account icon despite the page-by-page prose describing "search/account/cart" — confirm with the client/designer which is correct before building.
- `design/Lambruk Pantry Design System/uploads/` (old, homepage-only) and `design/design_handoff_website/` (new, full 8-page) now coexist in `design/` — worth a note (or a move) so a future session doesn't read the superseded one by mistake.
- Cafe booking mode (phone vs. widget) and reviews-app choice are both upstream decisions that block real build work in steps 13–15 above — worth raising with the client early rather than at the point of building them.
