# UI kit — Lambruk Pantry marketing website

A high-fidelity recreation of the Lambruk Pantry homepage, rebuilt from `sources/homepage-hifi.pdf`.
It composes the design-system primitives (`Button`, `IconButton`, `Tag`, `EyebrowLabel`,
`SectionHeading`, `ProductCard`, `Newsletter`) rather than re-implementing them.

Open `index.html`. Photography is extracted from the source PDF and lives in `assets/images/`.

## Screens / sections
| File | Section |
|---|---|
| `Header.jsx` | Sticky nav — logo, 5 links, search / account / cart. Gains a hairline + backdrop blur past 24px scroll. |
| `Hero.jsx` | Split hero on paper — headline, copy, two CTAs left; inset photo + award medal right. A gold-checkmark proof bar on the alt paper band sits below. |
| `Categories.jsx` | "Explore by category" — three square photo tiles (Tea Collection, Sauces & Chutney, Pantry Staples). |
| `Promise.jsx` | "The Lambruk Promise" — centred serif quote on navy, punctuated with gold illustrations. |
| `Cafe.jsx` | Alt-paper split panel — photo left, Ballina address/hours and "Reserve a table" right. |
| `Spotlight.jsx` | "The Seasonal Spotlight" — horizontally scrolling rail of five product cards with star ratings, wired to the cart. |
| `WhyLambruk.jsx` | Centred serif quote on navy, punctuated with gold illustrations. |
| `Occasions.jsx` | "Curated for every occasion" — four 3:4 photo cards with bottom protection gradients. |
| `Reviews.jsx` | "Loved at country tables" — average rating and three customer review cards. |
| `Wholesale.jsx` | Two white cards — photo top, copy and CTA below — for Wholesale partnerships and High Tea. |
| `Subscribe.jsx` | "Subscribe to Seasonal Dispatches" — inline email capture on the alt paper band. |
| `Footer.jsx` | Logo + mission, Shop / Explore / General columns, legal row with policies and socials, Akima Studio credit. |
| `CartDrawer.jsx` | Right-hand basket drawer — line items, subtotal, checkout. Opens on Add. |

## Interactions
Click a product in the Seasonal Spotlight to add it and open the cart drawer; the header badge counts items and
the drawer can remove lines and totals the subtotal. Nav links scroll to the Cafe, Shop and Wholesale sections.
The rail arrows scroll the product carousel.

## Known gaps
Only the homepage was supplied. Shop listing, product detail, cart/checkout, Our Story, Contact and the
Wholesale application form are not in the source and are intentionally not invented here.
