const { Button, SectionHeading } = window.LDS;

const CATEGORIES = [
  { name:'Tea Collection', image:'../../assets/images/category-tea-collection.png' },
  { name:'Sauces & Chutney', image:'../../assets/images/category-sauces-chutney.png' },
  { name:'Pantry Staples', image:'../../assets/images/category-pantry-staples.png' }
];

function CategoryTile({ name, image, onClick, isMobile }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onClick && onClick(name);}}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ display:'block', textDecoration:'none', borderRadius:'var(--radius-lg)', overflow:'hidden',
        border:'1px solid var(--border)', background:'var(--surface-card)',
        boxShadow: h ? 'var(--shadow-card)' : 'var(--shadow-whisper)',
        transform: h ? 'translateY(var(--hover-lift))' : 'none',
        transition:'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)' }}>
      <div style={{ aspectRatio: isMobile ? '16 / 9' : '1 / 1', overflow:'hidden' }}>
        <img src={image} alt={name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
          transform: h ? 'scale(var(--image-hover-scale))' : 'scale(1)', transition:'transform var(--dur-slow) var(--ease-out)' }} />
      </div>
      <div style={{ padding: isMobile ? '18px 20px' : '22px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <span style={{ fontFamily:'var(--font-serif-display)', fontSize:'var(--display-5-size)', color:'var(--text-strong)' }}>{name}</span>
        <i data-lucide="arrow-right" style={{ color:'var(--accent)' }}></i>
      </div>
    </a>
  );
}

function Categories({ onCategory }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'var(--paper)', padding: isMobile ? '44px 0' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>
        <SectionHeading title="Explore by category" action={<Button variant="ghost" iconRight={<i data-lucide="arrow-right"></i>}>Shop all</Button>} style={{ marginBottom: isMobile ? '20px' : '44px' }} />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '16px' : '28px' }}>
          {CATEGORIES.map(c => <CategoryTile key={c.name} {...c} isMobile={isMobile} onClick={onCategory} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Categories });
