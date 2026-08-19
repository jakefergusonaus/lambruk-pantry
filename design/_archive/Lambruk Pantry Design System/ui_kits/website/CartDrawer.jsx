const { Button, EyebrowLabel } = window.LDS;

function CartDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((s,i)=> s + i.qty * parseFloat(String(i.price).replace('$','')), 0);
  return (
    <React.Fragment>
      <div onClick={onClose} style={{ position:'fixed', inset:0, background:'var(--scrim)', zIndex:40,
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition:'opacity var(--dur-base) var(--ease-out)' }}></div>
      <aside style={{ position:'fixed', top:0, right:0, bottom:0, width:'420px', zIndex:41,
        background:'var(--paper)', borderLeft:'1px solid var(--border)', display:'flex', flexDirection:'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform var(--dur-slow) var(--ease-out)' }}>
        <div style={{ padding:'28px', borderBottom:'1px solid var(--border)', display:'flex',
          alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <EyebrowLabel style={{ marginBottom:'8px' }}>Your Basket</EyebrowLabel>
            <div style={{ fontFamily:'var(--font-serif-display)', fontSize:'28px', color:'var(--text-strong)' }}>
              {items.length ? items.length + (items.length===1?' item':' items') : 'Empty'}
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-body)' }}>
            <i data-lucide="x"></i>
          </button>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'8px 28px' }}>
          {items.length === 0 ? (
            <p style={{ fontFamily:'var(--font-sans)', fontSize:'14px', color:'var(--text-muted)', marginTop:'32px' }}>
              Nothing here yet. Add something from the Seasonal Spotlight.
            </p>
          ) : items.map(i => (
            <div key={i.id} style={{ display:'flex', gap:'16px', padding:'20px 0', borderBottom:'1px solid var(--divider)' }}>
              <img src={i.image} alt="" style={{ width:'68px', height:'68px', objectFit:'cover',
                borderRadius:'var(--radius-sm)', border:'1px solid var(--border)' }} />
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:'var(--font-serif-display)', fontSize:'18px', color:'var(--text-strong)', lineHeight:1.2 }}>{i.name}</div>
                <div style={{ fontFamily:'var(--font-sans)', fontSize:'13px', color:'var(--text-muted)', marginTop:'6px' }}>{i.qty} × {i.price}</div>
              </div>
              <button onClick={()=>onRemove(i.id)} aria-label="Remove" style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-muted)' }}>
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          ))}
        </div>
        <div style={{ padding:'24px 28px', borderTop:'1px solid var(--border)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', fontFamily:'var(--font-sans)',
            fontSize:'15px', color:'var(--text-body)', marginBottom:'18px' }}>
            <span>Subtotal</span><span>${total.toFixed(2)}</span>
          </div>
          <Button fullWidth size="lg" disabled={items.length===0}>Checkout</Button>
        </div>
      </aside>
    </React.Fragment>
  );
}
Object.assign(window, { CartDrawer });
