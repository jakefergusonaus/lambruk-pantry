import React from 'react';

const base = {
  display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'8px',
  fontFamily:'var(--font-sans)', fontWeight:500, lineHeight:1,
  border:'1px solid transparent', cursor:'pointer', textDecoration:'none',
  whiteSpace:'nowrap', transition:'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
};

const sizes = {
  sm:{ fontSize:'13px', padding:'0 16px', height:'36px', borderRadius:'var(--radius-sm)' },
  md:{ fontSize:'14px', padding:'0 22px', height:'44px', borderRadius:'var(--radius-sm)' },
  lg:{ fontSize:'15px', padding:'0 30px', height:'52px', borderRadius:'var(--radius-sm)' }
};

const variants = {
  primary:{ background:'var(--brand)', color:'var(--gold-50)', borderColor:'var(--brand)' },
  secondary:{ background:'transparent', color:'var(--brand)', borderColor:'var(--border-strong)' },
  accent:{ background:'var(--accent)', color:'var(--blue-950)', borderColor:'var(--accent)' },
  onDark:{ background:'var(--gold-50)', color:'var(--brand)', borderColor:'var(--gold-50)' },
  onDarkOutline:{ background:'transparent', color:'var(--gold-50)', borderColor:'rgba(247,245,242,.42)' },
  ghost:{ background:'transparent', color:'var(--brand)', borderColor:'transparent', padding:'0 4px' }
};

const hovers = {
  primary:{ background:'var(--brand-deep)', borderColor:'var(--brand-deep)' },
  secondary:{ background:'var(--gold-100)', borderColor:'var(--gold-300)' },
  accent:{ background:'var(--gold-600)', borderColor:'var(--gold-600)' },
  onDark:{ background:'var(--gold-100)', borderColor:'var(--gold-100)' },
  onDarkOutline:{ background:'rgba(247,245,242,.12)', borderColor:'rgba(247,245,242,.72)' },
  ghost:{ color:'var(--accent)' }
};

export function Button({ variant='primary', size='md', as, href, fullWidth=false, disabled=false, iconLeft, iconRight, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const s = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? { width:'100%' } : null),
    ...(press && !disabled ? { transform:'scale(var(--press-scale))' } : null),
    ...(disabled ? { opacity:.42, cursor:'not-allowed' } : null),
    ...style
  };
  return (
    <Tag href={href} disabled={Tag==='button'?disabled:undefined} style={s}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false);}}
      onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
