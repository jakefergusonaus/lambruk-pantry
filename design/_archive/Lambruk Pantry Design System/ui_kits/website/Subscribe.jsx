const { Button, Input } = window.LDS;

function Subscribe({ onSubmit }) {
  const [value, setValue] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const isMobile = useIsMobile();
  return (
    <section style={{ background:'var(--paper-2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding: isMobile ? '36px 20px' : '56px 0' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding: isMobile ? '0' : '0 40px', display:'flex',
        flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center',
        justifyContent:'space-between', gap: isMobile ? '18px' : '48px', flexWrap: isMobile ? 'nowrap' : 'wrap' }}>
        <div>
          <h2 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize: isMobile ? '24px' : '28px', margin:'0 0 8px', color:'var(--text-strong)' }}>Subscribe to Seasonal Dispatches</h2>
          <p style={{ margin:0, fontFamily:'var(--font-sans)', fontSize:'14px', lineHeight:1.6, color:'var(--text-muted)' }}>Receive recipes, partner crop-reports, and first access to seasonal small-batch releases.</p>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); setSent(true); onSubmit && onSubmit(value);}}
          style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap:'12px', alignItems: isMobile ? 'stretch' : 'center' }}>
          <Input name="email" type="email" placeholder="Enter your email" value={value}
            onChange={(e)=>setValue(e.target.value)} aria-label="Email" style={{ width: isMobile ? '100%' : '260px' }} />
          <Button type="submit" variant="primary" size="md" fullWidth={isMobile} style={{ flexShrink:0 }}>{sent ? 'Subscribed' : 'Subscribe'}</Button>
        </form>
      </div>
    </section>
  );
}
Object.assign(window, { Subscribe });
