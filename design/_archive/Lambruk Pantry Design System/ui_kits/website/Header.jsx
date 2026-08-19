const { Button, IconButton } = window.LDS;

function MobileDrawer({ open, onClose, onNav }) {
  const links = ['Shop','Wholesale','Cafe','Our Story','Contact'];
  return (
    <div style={{ position:'fixed', inset:0, zIndex:60, visibility: open?'visible':'hidden', pointerEvents: open?'auto':'none' }}>
      <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(13,16,36,.46)', opacity: open?1:0, transition:'opacity var(--dur-base) var(--ease-out)' }}></div>
      <nav style={{ position:'fixed', top:0, bottom:0, left:0, width:'82%', maxWidth:'330px', boxSizing:'border-box',
        overflowY:'auto', background:'var(--paper)', display:'flex', flexDirection:'column', padding:'24px 24px 32px',
        transform: open ? 'translateX(0)' : 'translateX(-100%)', transition:'transform var(--dur-base) var(--ease-out)' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'32px' }}>
          <img src="../../assets/lambruk-logo-blue.svg" alt="Lambruk Pantry" style={{ height:'30px' }} />
          <button onClick={onClose} aria-label="Close menu" style={{ width:'44px', height:'44px', background:'none', border:'none',
            cursor:'pointer', fontSize:'22px', color:'var(--text-muted)' }}>&times;</button>
        </div>
        <div style={{ display:'flex', flexDirection:'column' }}>
          {links.map(l => (
            <a key={l} href="#" onClick={(e)=>{e.preventDefault(); onNav(l); onClose();}}
              style={{ fontFamily:'var(--font-serif-display)', fontSize:'30px', color:'var(--text-strong)',
                textDecoration:'none', padding:'14px 0', borderBottom:'1px solid var(--border)' }}>{l}</a>
          ))}
        </div>
        <div style={{ marginTop:'auto', paddingTop:'28px', display:'flex', flexDirection:'column', gap:'6px',
          fontFamily:'var(--font-sans)', fontSize:'14px', color:'var(--text-muted)' }}>
          <span>02 6684 1066</span>
          <span>sales@lambrukpantry.com</span>
        </div>
      </nav>
    </div>
  );
}

function Header({ cartCount, onCart, onNav, active }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  React.useEffect(()=>{
    const el = document.getElementById('page');
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    (el||window).addEventListener('scroll', fn); return () => (el||window).removeEventListener('scroll', fn);
  },[]);
  const links = ['Shop','Wholesale','Cafe','Our Story','Contact'];
  return (
    <header style={{ position:'sticky', top:0, zIndex:20,
      background: scrolled ? 'rgba(251,250,247,.86)' : 'var(--paper)',
      backdropFilter: scrolled ? 'var(--blur-header)' : 'none',
      borderBottom:'1px solid ' + (scrolled ? 'var(--border)' : 'transparent'),
      transition:'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0 20px' : '0 40px',
        height: isMobile ? '64px' : '88px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'32px' }}>
        {isMobile ? (
          <button onClick={()=>setMenuOpen(true)} aria-label="Menu" style={{ width:'44px', height:'44px', marginLeft:'-12px',
            background:'none', border:'none', cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--text-strong)' }}>
            <i data-lucide="menu"></i>
          </button>
        ) : null}
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav('Home');}} style={{ display:'flex', flexShrink:0 }}>
          <img src="../../assets/lambruk-logo-blue.svg" alt="Lambruk Pantry" style={{ height: isMobile ? '30px' : '40px' }} />
        </a>
        {!isMobile ? (
          <nav style={{ display:'flex', gap:'34px' }}>
            {links.map(l => (
              <a key={l} href="#" onClick={(e)=>{e.preventDefault(); onNav(l);}}
                style={{ fontSize:'14px', color: active===l ? 'var(--text-accent)' : 'var(--text-body)',
                  textDecoration:'none', transition:'color var(--dur-base) var(--ease-out)' }}
                onMouseEnter={e=>e.currentTarget.style.color='var(--text-accent)'}
                onMouseLeave={e=>e.currentTarget.style.color= active===l ? 'var(--text-accent)':'var(--text-body)'}>{l}</a>
            ))}
          </nav>
        ) : null}
        <div style={{ display:'flex', alignItems:'center', gap: isMobile ? '0' : '4px', flexShrink:0 }}>
          {!isMobile ? <IconButton label="Search" icon={<i data-lucide="search"></i>} /> : null}
          {!isMobile ? <IconButton label="Account" icon={<i data-lucide="user"></i>} /> : null}
          <div style={{ position:'relative' }}>
            <IconButton label="Cart" onClick={onCart} icon={<i data-lucide="shopping-bag"></i>} />
            {cartCount > 0 ? <span style={{ position:'absolute', top:'-2px', right:'-2px', minWidth:'18px', height:'18px',
              borderRadius:'999px', background:'var(--accent)', color:'var(--blue-950)', fontSize:'10px', fontWeight:600,
              display:'flex', alignItems:'center', justifyContent:'center', padding:'0 5px' }}>{cartCount}</span> : null}
          </div>
        </div>
      </div>
      <MobileDrawer open={menuOpen} onClose={()=>setMenuOpen(false)} onNav={onNav} />
    </header>
  );
}
Object.assign(window, { Header });
