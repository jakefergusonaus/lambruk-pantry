const { EyebrowLabel } = window.LDS;

function Promise_() {
  const isMobile = useIsMobile();
  const img = { height: isMobile ? '52px' : '76px', width:'auto', verticalAlign:'middle', margin: isMobile ? '0 6px' : '0 14px' };
  return (
    <section style={{ background:'var(--surface-dark)', padding: isMobile ? '56px 24px' : '104px 0', textAlign: isMobile ? 'center' : undefined }}>
      <div style={{ maxWidth:'1000px', margin:'0 auto', padding: isMobile ? '0' : '0 40px', textAlign:'center' }}>
        <EyebrowLabel tone="onDark" align="center" style={{ marginBottom: isMobile ? '20px' : '32px', fontSize: isMobile ? '11px' : undefined }}>The Lambruk Promise</EyebrowLabel>
        <p style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '30px' : '44px', lineHeight:1.45,
          color:'var(--text-on-dark)', margin:0, textWrap:'pretty' }}>
          Made with real fruit <img src="../../assets/illustrations/fruit-bowl-gold.png" alt="" style={img} />
          Australian ingredients <img src="../../assets/illustrations/australia-gold.png" alt="" style={img} />{isMobile ? null : <br/>}
          and partnerships with the farmers who grow them <img src="../../assets/illustrations/seedling-gold.png" alt="" style={img} />
        </p>
      </div>
    </section>
  );
}
Object.assign(window, { Promise_ });
