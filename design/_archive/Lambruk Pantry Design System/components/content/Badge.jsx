import React from 'react';

export function Badge({ children, tone='accent', style, ...rest }) {
  const tones = {
    accent:{ background:'var(--accent)', color:'var(--blue-950)' },
    navy:{ background:'var(--brand)', color:'var(--gold-50)' },
    paper:{ background:'var(--gold-50)', color:'var(--brand)', boxShadow:'inset 0 0 0 1px var(--border)' }
  };
  return (
    <span style={{ display:'inline-block', fontFamily:'var(--font-sans)', fontSize:'10px', fontWeight:600,
      letterSpacing:'.14em', textTransform:'uppercase', padding:'5px 9px', borderRadius:'var(--radius-xs)',
      lineHeight:1, ...tones[tone], ...style }} {...rest}>{children}</span>
  );
}
