const { Button } = window.LDS;

function WholesaleCard({ image, alt, title, copy, cta, onClick, isMobile }) {
  return (
    <div style={{ background:'var(--surface-card)', border:'1px solid var(--border)', borderRadius:'var(--radius-lg)',
      overflow:'hidden', boxShadow:'var(--shadow-whisper)' }}>
      <div style={{ aspectRatio:'16 / 10' }}>
        <img src={image} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
      </div>
      <div style={{ padding: isMobile ? '24px' : '32px' }}>
        <h3 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '26px' : '30px', margin:'0 0 10px', color:'var(--text-strong)' }}>{title}</h3>
        <p style={{ margin:'0 0 20px', fontFamily:'var(--font-sans)', fontSize:'15px', lineHeight:1.65, color:'var(--text-muted)' }}>{copy}</p>
        <Button variant="secondary" size="md" fullWidth={isMobile} onClick={onClick}>{cta}</Button>
      </div>
    </div>
  );
}

function Wholesale({ onStockist, onHighTea }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'var(--paper-2)', padding: isMobile ? '44px 20px' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px', display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '20px' : '28px' }}>
        <WholesaleCard isMobile={isMobile} image="../../assets/images/storefront-high-tea.png" alt="Wholesale partnerships"
          title="Wholesale partnerships" cta="Become a Stockist" onClick={onStockist}
          copy="Bring handcrafted pantry products to your café, restaurant, hotel or retail store, with flexible wholesale options and products your customers will come back for." />
        <WholesaleCard isMobile={isMobile} image="../../assets/images/high-tea-stand.png" alt="High tea"
          title="A high tea worth travelling for" cta="View High Tea" onClick={onHighTea}
          copy="Enjoy handcrafted pastries, locally sourced ingredients and our signature teas in an experience inspired by country hospitality." />
      </div>
    </section>
  );
}
Object.assign(window, { Wholesale });
