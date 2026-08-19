import React from 'react';
import { EyebrowLabel } from './EyebrowLabel.jsx';

export function SectionHeading({ eyebrow, title, description, action, align='left', tone='light', level=2, style }) {
  const Tag = 'h' + level;
  const dark = tone === 'dark';
  const sizeVar = level <= 2 ? 'var(--display-2-size)' : 'var(--display-3-size)';
  const lhVar = level <= 2 ? 'var(--display-2-lh)' : 'var(--display-3-lh)';
  return (
    <div style={{ display:'flex', alignItems: align==='center' ? 'center' : 'flex-end', justifyContent:'space-between', gap:'32px',
      flexDirection: align==='center' ? 'column' : 'row',
      textAlign: align==='center' ? 'center' : 'left', ...style }}>
      <div style={{ width: align==='center' ? '100%' : undefined, maxWidth: align==='center' ? 'var(--measure-prose)' : '760px' }}>
        {eyebrow ? <EyebrowLabel tone={dark?'onDark':'accent'} align={align==='center'?'center':'left'} style={{marginBottom:'16px'}}>{eyebrow}</EyebrowLabel> : null}
        <Tag style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize:sizeVar, lineHeight:lhVar,
          letterSpacing:'var(--display-tracking)', color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)', margin:0 }}>{title}</Tag>
        {description ? <p style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-lg-size)', lineHeight:'var(--body-lg-lh)',
          color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', margin:'16px 0 0', maxWidth:'640px',
          marginLeft: align==='center' ? 'auto' : undefined, marginRight: align==='center' ? 'auto' : undefined }}>{description}</p> : null}
      </div>
      {action ? <div style={{ flexShrink:0, paddingBottom:'6px' }}>{action}</div> : null}
    </div>
  );
}
