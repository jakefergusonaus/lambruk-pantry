import React from 'react';

export function Input({ label, hint, error, tone='light', id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  const inputId = id || rest.name || undefined;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'8px', width:'100%', ...style }}>
      {label ? <label htmlFor={inputId} style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-sm-size)',
        fontWeight:500, color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>{label}</label> : null}
      <input id={inputId} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-size)', height:'48px', padding:'0 16px',
          borderRadius:'var(--radius-sm)', outline:'none', width:'100%',
          background: dark ? 'rgba(247,245,242,.06)' : 'var(--surface-card)',
          color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
          border:'1px solid ' + (error ? 'var(--gold-700)' : focus ? 'var(--focus-ring)' : dark ? 'var(--border-on-dark)' : 'var(--border)'),
          boxShadow: focus ? '0 0 0 3px rgba(198,160,108,.22)' : 'none',
          transition:'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)' }} {...rest} />
      {error || hint ? <span style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-xs-size)',
        color: error ? 'var(--gold-700)' : dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{error || hint}</span> : null}
    </div>
  );
}
