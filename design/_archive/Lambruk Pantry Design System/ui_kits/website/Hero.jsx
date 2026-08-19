const { Button, EyebrowLabel } = window.LDS;

function CheckRow({ items, isMobile }) {
  return (
    <div style={{ background:'var(--paper-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', overflowX: isMobile ? 'auto' : 'visible' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '14px 20px' : '16px 40px',
        display:'flex', gap: isMobile ? '20px' : '12px', justifyContent: isMobile ? 'flex-start' : 'space-between',
        flexWrap: isMobile ? 'nowrap' : 'wrap', width: isMobile ? 'max-content' : 'auto' }}>
        {items.map(t => (
          <span key={t} style={{ display:'inline-flex', alignItems:'center', gap:'10px', fontFamily:'var(--font-sans)',
            fontSize:'12px', letterSpacing:'.16em', textTransform:'uppercase', color:'var(--text-muted)', whiteSpace:'nowrap' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12.5 9.5 18 20 6"></polyline></svg>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero({ onShop, onCafe }) {
  const isMobile = useIsMobile();
  return (
    <React.Fragment>
      <section style={{ padding: isMobile ? '32px 20px 40px' : '72px 0 80px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px',
          display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.08fr', gap: isMobile ? '0' : '64px', alignItems:'center' }}>
          <div>
            <EyebrowLabel style={{ marginBottom: isMobile ? '16px' : '22px', fontSize: isMobile ? '11px' : undefined }}>Multi Award Winning</EyebrowLabel>
            <h1 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '38px' : '56px',
              lineHeight: isMobile ? 1.06 : 1.04, letterSpacing:'var(--display-tracking)', color:'var(--text-strong)', margin:0, textWrap:'pretty' }}>
              Handcrafted pantry essentials from the Northern Rivers
            </h1>
            <p style={{ fontFamily:'var(--font-sans)', fontSize: isMobile ? '16px' : '17px', lineHeight:1.65,
              color:'var(--text-muted)', margin: isMobile ? '16px 0 24px' : '24px 0 32px', maxWidth: isMobile ? 'none' : '480px' }}>
              Discover handcrafted teas, sauces, chutneys, olive oils and gourmet pantry favourites made with
              Australian-grown ingredients, real fruit and direct partnerships with local farmers.
            </p>
            <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '14px' }}>
              <Button variant="primary" size="lg" fullWidth={isMobile} onClick={onShop}>Shop Now</Button>
              <Button variant="secondary" size="lg" fullWidth={isMobile} onClick={onCafe}>Visit Our Cafe</Button>
            </div>
          </div>
          <div style={{ position:'relative', marginTop: isMobile ? '28px' : 0 }}>
            <div style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', aspectRatio: isMobile ? '4 / 3' : '16 / 11' }}>
              <img src="../../assets/images/hero-cheeseboard.png" alt="Lambruk Pantry cheeseboard"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </div>
            <img src="../../assets/images/award-melbourne-royal-bronze-2024.png" alt="Melbourne Royal 2024 Australian Food Awards Bronze"
              style={ isMobile
                ? { position:'absolute', right:'12px', bottom:'-18px', width:'84px', height:'auto' }
                : { position:'absolute', right:'-16px', bottom:'-24px', width:'112px', height:'auto' } } />
          </div>
        </div>
      </section>
      <CheckRow isMobile={isMobile} items={['Low FODMAP','Gluten-Free','Glyphosate-Free','No Artificial Sweeteners','Top 9 Allergen-Free']} />
    </React.Fragment>
  );
}
Object.assign(window, { Hero });
