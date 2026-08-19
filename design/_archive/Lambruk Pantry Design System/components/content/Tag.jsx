import React from 'react';

export function Tag({ children, tone='paper', size='md', style, ...rest }) {
  const tones = {
    paper:{ background:'var(--gold-50)', color:'var(--text-body)', border:'1px solid var(--border)' },
    outline:{ background:'transparent', color:'var(--text-body)', border:'1px solid var(--border-strong)' },
    onDark:{ background:'rgba(247,245,242,.06)', color:'var(--text-on-dark)', border:'1px solid var(--border-on-dark)' },
    accent:{ background:'var(--gold-100)', color:'var(--gold-700)', border:'1px solid var(--gold-200)' }
  };
  const dims = size==='sm' ? { fontSize:'11px', padding:'5px 10px' } : { fontSize:'13px', padding:'8px 16px' };
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontFamily:'var(--font-sans)',
      fontWeight:450, borderRadius:'var(--radius-pill)', lineHeight:1, ...dims, ...tones[tone], ...style }} {...rest}>
      {children}
    </span>
  );
}
