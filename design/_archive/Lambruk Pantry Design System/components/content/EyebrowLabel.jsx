import React from 'react';

export function EyebrowLabel({ children, tone='accent', as:Tag='p', align='left', style, ...rest }) {
  const color = { accent:'var(--text-accent)', onDark:'var(--text-accent-on-dark)', muted:'var(--text-muted)' }[tone];
  return (
    <Tag style={{ fontFamily:'var(--font-sans)', fontSize:'var(--eyebrow-size)', fontWeight:'var(--eyebrow-weight)',
      letterSpacing:'var(--eyebrow-tracking)', textTransform:'uppercase', color, margin:0, textAlign:align, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
