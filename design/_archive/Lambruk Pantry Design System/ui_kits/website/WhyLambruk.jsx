const { EyebrowLabel } = window.LDS;

function WhyLambruk() {
  const isMobile = useIsMobile();
  const img = { height: isMobile ? '52px' : '76px', width:'auto', verticalAlign:'middle', margin: isMobile ? '0 6px' : '0 14px' };
  return (
    <section style={{ background:'var(--surface-dark)', padding: isMobile ? '56px 24px' : '104px 0' }}>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding: isMobile ? '0' : '0 40px', textAlign:'center' }}>
        <EyebrowLabel tone="onDark" align="center" style={{ marginBottom: isMobile ? '20px' : '32px', fontSize: isMobile ? '11px' : undefined }}>Why Lambruk</EyebrowLabel>
        <p style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '30px' : '44px', lineHeight:1.45,
          color:'var(--text-on-dark)', margin:0, textWrap:'pretty' }}>
          Every batch is crafted in small quantities <img src="../../assets/illustrations/preserve-jar-gold.png" alt="" style={img} />{isMobile ? null : <br/>}
          and made with <em>less sugar</em> <img src="../../assets/illustrations/stone-fruit-gold.png" alt="" style={img} /> for a more honest pantry.
        </p>
      </div>
    </section>
  );
}
Object.assign(window, { WhyLambruk });
