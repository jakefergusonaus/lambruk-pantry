import React from 'react';

const sizes = { sm:32, md:40, lg:48 };

export function IconButton({ icon, label, size='md', variant='ghost', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const tone = {
    ghost:{ background: hover ? 'var(--gold-100)' : 'transparent', color:'var(--brand)', border:'1px solid transparent' },
    outline:{ background: hover ? 'var(--gold-100)' : 'transparent', color:'var(--brand)', border:'1px solid var(--border)' },
    onDark:{ background: hover ? 'rgba(247,245,242,.12)' : 'transparent', color:'var(--gold-50)', border:'1px solid transparent' }
  }[variant];
  return (
    <button aria-label={label} title={label}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{ width:px, height:px, display:'inline-flex', alignItems:'center', justifyContent:'center',
        borderRadius:'var(--radius-pill)', cursor:'pointer', padding:0,
        transition:'background-color var(--dur-base) var(--ease-out)', ...tone, ...style }} {...rest}>
      {icon}
    </button>
  );
}
