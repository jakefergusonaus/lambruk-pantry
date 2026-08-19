const { Button, EyebrowLabel } = window.LDS;

function Cafe({ onReserve }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'var(--paper-2)', padding: isMobile ? '44px 20px' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px', display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.15fr', gap: isMobile ? '0' : '72px', alignItems:'center' }}>
        <div style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', aspectRatio: isMobile ? '4 / 3' : '4 / 5',
          marginBottom: isMobile ? '24px' : 0 }}>
          <img src="../../assets/images/cafe-exterior.png" alt="Lambruk Pantry Ballina"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        </div>
        <div>
          <EyebrowLabel style={{ marginBottom: isMobile ? '14px' : '20px', fontSize: isMobile ? '11px' : undefined }}>Introducing</EyebrowLabel>
          <h2 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '32px' : '44px',
            lineHeight:1.08, color:'var(--text-strong)', margin:0, textWrap:'pretty' }}>Lambruk Pantry Cafe</h2>
          <p style={{ fontFamily:'var(--font-sans)', fontSize: isMobile ? '16px' : '17px', lineHeight:1.65,
            color:'var(--text-muted)', margin: isMobile ? '14px 0 18px' : '20px 0 24px', maxWidth: isMobile ? 'none' : '520px' }}>
            Join us in the heart of Ballina for seasonal brunches, handcrafted pantry tasting experiences and
            country hospitality inspired by the produce of the Northern Rivers.
          </p>
          <p style={{ margin: isMobile ? '0 0 12px' : '0 0 20px', fontFamily:'var(--font-sans)', fontSize: isMobile ? '14px' : '15px', color:'var(--text-accent)' }}>
            Shop 8, 216–234 River Street, Ballina NSW 2478
          </p>
          <p style={{ margin: isMobile ? '0 0 24px' : '0 0 32px', fontFamily:'var(--font-sans)', fontSize:'15px', lineHeight:1.8, color:'var(--text-strong)' }}>
            8:30 AM – 5:00 PM<br />0458 370 757
          </p>
          <Button variant="primary" size="lg" fullWidth={isMobile} onClick={onReserve}>Reserve a table</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Cafe });
