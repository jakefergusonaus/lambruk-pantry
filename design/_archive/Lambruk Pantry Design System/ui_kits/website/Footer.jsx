const SHOP = [['All Products','goShop'],['Tea Collection','goTea'],['Sauces & Chutney','goCondiments'],['Pantry Staples','goPantry'],['Gift Boxes','goHighTeaShop']];
const EXPLORE = [['Our Story','goStory'],['Ballina Cafe','goCafe'],['Wholesale','goWholesale'],['Contact','goContact']];

function FooterLink({ label, onClick }) {
  return <span onClick={onClick} style={{ cursor:'pointer', fontFamily:'var(--font-sans)', fontSize:'15px', color:'var(--text-on-dark-muted)' }}
    onMouseEnter={e=>e.currentTarget.style.color='var(--gold-400)'}
    onMouseLeave={e=>e.currentTarget.style.color='var(--text-on-dark-muted)'}>{label}</span>;
}

function FooterColumn({ title, links, nav }) {
  return (
    <div>
      <p style={{ fontFamily:'var(--font-sans)', fontSize:'12px', letterSpacing:'.22em', textTransform:'uppercase', color:'var(--text-accent-on-dark)', margin:'0 0 18px' }}>{title}</p>
      <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
        {links.map(([label, key]) => <FooterLink key={label} label={label} onClick={()=>nav && nav(key)} />)}
      </div>
    </div>
  );
}

function Footer({ onNav }) {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background:'var(--surface-darker)', color:'var(--text-on-dark)', padding: isMobile ? '56px 20px 32px' : '80px 0 40px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px', display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.6fr 1fr 1fr 1fr', gap: isMobile ? '32px' : '48px' }}>
        <div>
          <img src="../../assets/lambruk-logo-white.svg" alt="Lambruk Pantry" style={{ height:'38px' }} />
          <p style={{ margin:'24px 0 0', fontFamily:'var(--font-sans)', fontSize:'15px', lineHeight:1.65,
            color:'var(--text-on-dark-muted)', maxWidth: isMobile ? 'none' : '340px' }}>
            Sourced deep from Australian soil. We curate life-affirming kitchen essentials made by small-batch
            farmers and passionate artisans.
          </p>
        </div>
        <FooterColumn title="Shop" links={SHOP} nav={onNav} />
        <FooterColumn title="Explore" links={EXPLORE} nav={onNav} />
        <div>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:'12px', letterSpacing:'.22em', textTransform:'uppercase', color:'var(--text-accent-on-dark)', margin:'0 0 18px' }}>General</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px', fontFamily:'var(--font-sans)', fontSize:'15px', color:'var(--text-on-dark-muted)' }}>
            <span>02 6684 1066</span>
            <span>sales@lambrukpantry.com</span>
            <span>26 Towers Drive, Mullumbimby NSW</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth:'var(--container)', margin: isMobile ? '40px auto 0' : '56px auto 0', padding: isMobile ? '20px 0 0' : '24px 40px 0', borderTop:'1px solid var(--border-on-dark)',
        display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent:'space-between', gap: isMobile ? '18px' : '32px', flexWrap:'wrap',
        fontFamily:'var(--font-sans)', fontSize:'13px', color:'var(--text-on-dark-muted)' }}>
        <span>© 2026 Lambruk Pantry. We acknowledge the Bundjalung Nation, Traditional Owners of the country on which we live and work.</span>
        <div style={{ display:'flex', alignItems:'center', gap:'20px', flexWrap:'wrap' }}>
          <FooterLink label="Shipping Policy" />
          <FooterLink label="Refunds & Returns" />
          <FooterLink label="Terms & Conditions" />
          <a href="https://www.instagram.com/lambrukpantry" target="_blank" rel="noopener" aria-label="Instagram" style={{ display:'inline-flex' }}><i data-lucide="instagram" style={{ color:'var(--text-on-dark-muted)' }}></i></a>
          <a href="https://www.facebook.com/Lambrukgroup/" target="_blank" rel="noopener" aria-label="Facebook" style={{ display:'inline-flex' }}><i data-lucide="facebook" style={{ color:'var(--text-on-dark-muted)' }}></i></a>
        </div>
      </div>
      <div style={{ maxWidth:'var(--container)', margin: isMobile ? '16px auto 0' : '20px auto 0', padding: isMobile ? '0' : '0 40px', fontFamily:'var(--font-sans)', fontSize:'13px', color:'var(--text-on-dark-muted)' }}>
        <span>Designed by <a href="https://akima.studio/" target="_blank" rel="noopener" style={{ color:'var(--gold-400)' }}>Akima Studio</a></span>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
