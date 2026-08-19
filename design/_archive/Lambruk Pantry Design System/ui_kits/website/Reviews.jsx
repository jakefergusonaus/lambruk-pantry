const { SectionHeading } = window.LDS;

const REVIEWS = [
  { title:'Our new favourite pantry staple', body:'The marmalade is unbelievable — real orange peel, not too sweet. We buy three jars at a time now.', name:'Paige B.', verified:'Verified Buyer' },
  { title:'Tastes like it was made with care', body:'You can tell every jar is small batch. The olive oil in particular is a step above anything else we have tried.', name:'Marcus T.', verified:'Verified Buyer' },
  { title:'Worth the trip to Ballina', body:'Visited the cafe on a weekend away and left with a full box of pantry favourites. Already reordering online.', name:'Helena R.', verified:'Verified Buyer' }
];

function Star({ filled }) {
  return filled
    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z"></path></svg>
    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9z"></path></svg>;
}

function ReviewCard({ r, isMobile }) {
  return (
    <div style={{ width: isMobile ? '268px' : 'auto', flex: isMobile ? 'none' : undefined,
      background:'var(--surface-card)', border:'1px solid var(--border)',
      borderRadius:'var(--radius-lg)', padding: isMobile ? '22px' : '28px', display:'flex', flexDirection:'column', gap: isMobile ? '12px' : '14px' }}>
      <span style={{ display:'inline-flex', gap:'3px' }}>{[1,1,1,1,1].map((f,i) => <Star key={i} filled />)}</span>
      <p style={{ margin:0, fontFamily:'var(--font-serif-display)', fontSize: isMobile ? '20px' : '22px', lineHeight:1.25, color:'var(--text-strong)' }}>{r.title}</p>
      <p style={{ margin:0, fontFamily:'var(--font-sans)', fontSize: isMobile ? '14px' : '15px', lineHeight:1.7, color:'var(--text-muted)' }}>{r.body}</p>
      <p style={{ margin:'auto 0 0', paddingTop: isMobile ? '6px' : '8px', fontFamily:'var(--font-sans)', fontSize: isMobile ? '12px' : '13px', color:'var(--text-muted)' }}>{r.name} · {r.verified}</p>
    </div>
  );
}

function Reviews() {
  const isMobile = useIsMobile();
  return (
    <section style={{ borderTop:'1px solid var(--border)', padding: isMobile ? '44px 0' : 'var(--section-y) 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>
        <SectionHeading eyebrow="Customer Reviews" title="Loved at country tables"
          description={isMobile ? '4.8 out of 5 · 312 reviews' : undefined}
          action={ isMobile ? null :
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <span style={{ display:'inline-flex', gap:'3px' }}>{[1,1,1,1,0].map((f,i) => <Star key={i} filled={!!f} />)}</span>
              <span style={{ fontFamily:'var(--font-sans)', fontSize:'14px', color:'var(--text-muted)' }}>4.8 out of 5 · 312 reviews</span>
            </div>}
          style={{ marginBottom: isMobile ? '0' : undefined }} />
      </div>
      {isMobile ? (
        <div style={{ marginTop:'20px', overflowX:'auto' }}>
          <div style={{ display:'flex', gap:'14px', padding:'0 20px', width:'max-content' }}>
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} isMobile />)}
          </div>
        </div>
      ) : (
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 40px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px', marginTop:'32px' }}>
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} isMobile={false} />)}
          </div>
        </div>
      )}
      <p style={{ margin: isMobile ? '16px 20px 0' : '24px 40px 0', maxWidth:'var(--container)', marginLeft: isMobile?undefined:'auto', marginRight: isMobile?undefined:'auto',
        fontFamily:'var(--font-sans)', fontSize: isMobile ? '11px' : '12px', color:'var(--text-muted)' }}>
        Reviews powered by Judge.me. Sample content shown until the store is connected.
      </p>
    </section>
  );
}
Object.assign(window, { Reviews });
