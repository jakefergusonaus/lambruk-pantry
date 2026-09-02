# Catering Module — Cafe Page

Add this module to the cafe page, placed directly after the "Pull Up a Chair" section and before the "Gallery" section.

## Design context
- Font: Instrument Serif for headings (Google Fonts / self-hosted), system sans for body.
- Colors: heading/body text `#131A3E` (navy), muted text `#4A5478`, eyebrow label `#A07037` (gold), border `#E3D6C5`.
- Section alternates with neighboring sections on plain background (no fill) to keep the paper → alt-paper rhythm.
- Replace `assets/occasion-entertaining.png` with your own catering photography.
- Replace the `href` on the link below with the real hosted PDF URL, and swap in your own catering menu file at that path.

## Desktop (≥1024px)

```html
<section id="cafe-catering" style="padding:88px 0">
  <div style="max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center">
    <div style="border-radius:16px;overflow:hidden;aspect-ratio:4/3">
      <img src="assets/images/occasion-entertaining.png" alt="Catering platters from Lambruk Pantry" style="width:100%;height:100%;object-fit:cover;display:block">
    </div>
    <div>
      <p style="font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#A07037;font-weight:500;margin:0 0 18px">Catering</p>
      <h2 style="font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:42px;line-height:1.06;margin:0">Lambruk on your table</h2>
      <p style="font-size:16px;line-height:1.7;color:#4A5478;margin:20px 0 28px;max-width:520px">Bring our pantry favourites to your next gathering. We cater grazing platters, high tea spreads and shared lunches for events big and small in the Northern Rivers.</p>
      <a href="assets/catering-menu.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border:1px solid #E3D6C5;border-radius:6px;color:#131A3E;font-size:15px;font-weight:500;text-decoration:none">View Catering Menu</a>
    </div>
  </div>
</section>
```

## Mobile (<1024px)

```html
<section id="cafe-catering" style="padding:40px 20px">
  <p style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#A07037;font-weight:500;margin:0 0 12px">Catering</p>
  <h2 style="font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:28px;margin:0 0 6px">Lambruk on your table</h2>
  <p style="font-size:15px;line-height:1.7;color:#4A5478;margin:14px 0 20px">Bring our pantry favourites to your next gathering. We cater grazing platters, high tea spreads and shared lunches for events big and small in the Northern Rivers.</p>
  <div style="border-radius:16px;overflow:hidden;aspect-ratio:4/3;margin-bottom:20px">
    <img src="assets/images/occasion-entertaining.png" alt="Catering platters from Lambruk Pantry" style="width:100%;height:100%;object-fit:cover;display:block">
  </div>
  <a href="assets/catering-menu.pdf" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border:1px solid #E3D6C5;border-radius:6px;color:#131A3E;font-size:15px;font-weight:500;text-decoration:none">View Catering Menu</a>
</section>
```

## Notes for implementation
- The "View Catering Menu" link opens the PDF in a new tab (`target="_blank" rel="noopener"`). Host the actual catering menu PDF and point the `href` at it.
- If the site uses a component library / button component instead of raw `<a>` tags, wrap the link content in the site's secondary-button component while keeping `href`, `target="_blank"` and `rel="noopener"`.
