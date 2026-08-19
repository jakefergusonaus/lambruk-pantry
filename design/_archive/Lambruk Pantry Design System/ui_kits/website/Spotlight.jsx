const { SectionHeading } = window.LDS;

const PRODUCTS = [
  { id:'marmalade', category:'Preserves', name:'Blood Orange & Rosemary Marmalade', price:'$18.00', image:'../../assets/images/product-marmalade.png', rating:4, reviewCount:'128' },
  { id:'oliveoil',  category:'Oils',      name:'Pressed Wild Olive Oil',            price:'$34.00', image:'../../assets/images/product-olive-oil.png', rating:5, reviewCount:'86' },
  { id:'pepper',    category:'Spices',    name:'Native Bush Pepper Blend',          price:'$16.00', image:'../../assets/images/product-native-pepper.png', rating:4, reviewCount:'54' },
  { id:'honey',     category:'Honey',     name:'Raw Blue Gum Honey',                price:'$22.00', image:'../../assets/images/product-honey.png', rating:5, reviewCount:'201' },
  { id:'salted',    category:'Condiments',name:'Salted Peach & Terroir Mustard',    price:'$19.00', image:'../../assets/images/product-salted-terroir.png', rating:4, reviewCount:'37' }
];

function Star({ filled }) {
  return filled
    ? <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z"></path></svg>
    : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z"></path></svg>;
}

function SpotlightCard({ p, onAdd, isMobile }) {
  const [h, setH] = React.useState(false);
  return (
    <div onClick={()=>onAdd(p)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ cursor:'pointer', width: isMobile ? '220px' : '264px', flex:'none' }}>
      <div style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', aspectRatio:'4 / 5', border:'1px solid var(--border)' }}>
        <img src={p.image} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
          transform: h ? 'scale(var(--image-hover-scale))' : 'scale(1)', transition:'transform var(--dur-slow) var(--ease-out)' }} />
      </div>
      <p style={{ fontFamily:'var(--font-sans)', fontSize:'12px', letterSpacing:'.16em', textTransform:'uppercase',
        color:'var(--text-accent)', margin:'18px 0 8px' }}>{p.category}</p>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'16px' }}>
        <span style={{ fontFamily:'var(--font-sans)', fontSize:'15px', color:'var(--text-strong)', lineHeight:1.45 }}>{p.name}</span>
        <span style={{ fontFamily:'var(--font-sans)', fontSize:'15px', color:'var(--text-muted)', whiteSpace:'nowrap' }}>{p.price}</span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'8px', marginTop:'10px' }}>
        <span style={{ display:'inline-flex', gap:'2px' }}>{[1,2,3,4,5].map(i => <Star key={i} filled={i<=p.rating} />)}</span>
        <span style={{ fontFamily:'var(--font-sans)', fontSize:'12px', color:'var(--text-muted)' }}>({p.reviewCount})</span>
      </div>
    </div>
  );
}

function Spotlight({ onAdd }) {
  const railRef = React.useRef(null);
  const isMobile = useIsMobile();
  const scrollBy = (dx) => railRef.current && railRef.current.scrollBy({ left:dx, behavior:'smooth' });
  return (
    <section style={{ background:'var(--paper)', padding: isMobile ? '44px 0' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>
        <SectionHeading eyebrow="New Releases" title="The Seasonal Spotlight"
          action={ isMobile ? null :
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <button onClick={()=>scrollBy(-360)} aria-label="Previous" style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-accent)', display:'flex' }}><i data-lucide="chevron-left"></i></button>
              <button onClick={()=>scrollBy(360)} aria-label="Next" style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-accent)', display:'flex' }}><i data-lucide="chevron-right"></i></button>
            </div>}
          style={{ marginBottom: isMobile ? '20px' : '44px' }} />
      </div>
      <div ref={railRef} style={{ display:'flex', gap: isMobile ? '16px' : '24px', overflowX:'auto', padding: isMobile ? '6px 20px 20px' : '6px 40px 20px',
        scrollSnapType:'x mandatory', scrollPaddingLeft: isMobile ? '20px' : '40px', maxWidth:'var(--container)', margin:'0 auto', scrollbarWidth:'none' }}>
        {PRODUCTS.map(p => <SpotlightCard key={p.id} p={p} isMobile={isMobile} onAdd={onAdd} />)}
      </div>
    </section>
  );
}
Object.assign(window, { Spotlight, PRODUCTS });
