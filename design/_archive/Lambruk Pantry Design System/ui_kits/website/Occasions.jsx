const { SectionHeading } = window.LDS;

const OCCASIONS = [
  { name:'Slow Mornings', copy:'Everything you need for the perfect breakfast.', image:'../../assets/images/occasion-slow-mornings.png' },
  { name:'Entertaining', copy:'The perfect companions for cheese boards and shared tables.', image:'../../assets/images/occasion-entertaining.png' },
  { name:'Sunday Roast', copy:'Bring richer flavour to every family gathering.', image:'../../assets/images/occasion-sunday-roast.png' },
  { name:'High Tea', copy:'French-inspired elegance.', image:'../../assets/images/occasion-high-tea.png' }
];

function OccasionCard({ name, copy, image, isMobile }) {
  const [h, setH] = React.useState(false);
  return (
    <a href="#" onClick={e=>e.preventDefault()} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ position:'relative', display:'block', borderRadius:'var(--radius-lg)', overflow:'hidden',
        textDecoration:'none', aspectRatio:'3 / 4' }}>
      <img src={image} alt={name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover',
        transform: h ? 'scale(var(--image-hover-scale))' : 'scale(1)', transition:'transform var(--dur-slow) var(--ease-out)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(13,16,36,0) 28%, rgba(13,16,36,.46) 56%, rgba(13,16,36,.86) 100%)' }}></div>
      <div style={{ position:'absolute', left:0, right:0, bottom:0, padding: isMobile ? '16px' : '26px' }}>
        <div style={{ fontFamily:'var(--font-serif-display)', fontStyle:'italic', fontSize: isMobile ? '20px' : '28px', color:'var(--gold-50)' }}>{name}</div>
        {isMobile ? null : <div style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-sm-size)', lineHeight:1.5,
          color:'rgba(247,245,242,.78)', marginTop:'8px' }}>{copy}</div>}
      </div>
    </a>
  );
}

function Occasions() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'var(--paper)', padding: isMobile ? '44px 20px' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px' }}>
        <SectionHeading eyebrow="Curated Occasions" title="Curated for every occasion" align={isMobile ? 'left' : 'center'} style={{ marginBottom: isMobile ? '20px' : '52px' }} />
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? '14px' : '24px' }}>
          {OCCASIONS.map(o => <OccasionCard key={o.name} {...o} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Occasions });
