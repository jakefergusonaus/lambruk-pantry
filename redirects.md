# Redirects to create before go-live

Running log of every URL that changes during the Horizon rebuild.

**The rule:** if a page, product, collection, or blog handle changes — or the resource is deleted — add a row here in the same session that the change is made. Never leave it until later.

**At go-live:** every row in this table gets entered in the Shopify admin under **Online Store → Navigation → URL Redirects**, before the theme is published. Tick it off in the Done column as it goes in.

Baseline of the original URLs: `url-baseline.md`.

---

| Old path | New path | Reason | Date changed | Done |
|---|---|---|---|---|
| `/products/dehyrated-oranges` | `/products/dehydrated-oranges` | typo fix | 2026-08-25 | ✅ |
| `/products/dehyrated-lemons` | `/products/dehydrated-lemons` | typo fix | 2026-08-25 | ✅ |
| `/products/dehyrated-limes` | `/products/dehydrated-limes` | typo fix | 2026-08-25 | ✅ |
| `/products/monring-tea-tea-bags-5` | `/products/morning-tea-5-tea-bags` | typo fix + sibling naming consistency | 2026-08-25 | ✅ |
| `/products/lemon-ginger-tea-60g-losse-leaf` | `/products/lemon-ginger-tea-60g-loose-leaf` | typo fix + sibling naming consistency | 2026-08-25 | ✅ |
| `/products/tomato-capsicum-relish-260g` | `/products/tomato-capsicum-relish-100g` | mislabeled — this is the 100g product | 2026-08-25 | ✅ |
| `/products/tomato-capsicum-relish-260g-1` | `/products/tomato-capsicum-relish-260g` | mislabeled — this is the 260g product | 2026-08-25 | ✅ |

**Note on the "at go-live" timing above (2026-08-25):** these seven were client-approved and changed directly in Admin ahead of go-live, not batched — product handles are store-wide and take effect immediately through whichever theme is currently *published* (Flux, not this rebuild's Horizon), so a typo'd product URL couldn't wait for this project's own go-live. Redirects were created in Admin at the same time as the handle changes, not deferred. The "batch at go-live" workflow below still applies to handle changes that are *only* relevant to this rebuild (e.g. would have no live impact until Horizon is published) — this row shows what to do when a change needs to go live sooner than that.

---

## What counts as a change

Add a row when any of these happen:

- A page, product, collection, or article handle is renamed
- A product or page is deleted, or merged into another
- A collection is split, combined, or replaced
- A blog article is moved to a different blog
- A URL structure changes — e.g. a page becomes a collection

Do **not** add a row for:

- Theme, layout, or design changes (URLs are unaffected)
- Products going out of stock or being unpublished — Shopify keeps the URL live
- Anything under `/policies/` — those handles are fixed by Shopify

## Verifying after go-live

Once the theme is published and redirects are in, spot-check by pasting a handful of old URLs from `url-baseline.md` into a browser. Each should land on the right new page, not a 404.

If the client has Google Search Console, check the Coverage report about two weeks after launch — a spike in 404s means something was missed.
