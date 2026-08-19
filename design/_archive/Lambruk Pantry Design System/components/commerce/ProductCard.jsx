import React from 'react';
import { Badge } from '../content/Badge.jsx';
import { Button } from '../actions/Button.jsx';

export function ProductCard({ image, imageAlt='', category, name, price, badge, onAdd, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{ display:'flex', flexDirection:'column', height:'100%', background:'var(--surface-card)',
        border:'1px solid var(--border)', borderRadius:'var(--radius-lg)', overflow:'hidden',
        boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-whisper)',
        transform: hover ? 'translateY(var(--hover-lift))' : 'none',
        transition:'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)', ...style }} {...rest}>
      <div style={{ position:'relative', aspectRatio:'4 / 3', overflow:'hidden', background:'var(--gold-50)' }}>
        {image ? <img src={image} alt={imageAlt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block',
          transform: hover ? 'scale(var(--image-hover-scale))' : 'scale(1)',
          transition:'transform var(--dur-slow) var(--ease-out)' }} /> : null}
        {badge ? <div style={{ position:'absolute', top:'12px', left:'12px' }}><Badge>{badge}</Badge></div> : null}
      </div>
      <div style={{ padding:'20px', display:'flex', flexDirection:'column', gap:'6px', flex:1 }}>
        {category ? <span style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-xs-size)', letterSpacing:'.14em',
          textTransform:'uppercase', color:'var(--text-accent)' }}>{category}</span> : null}
        <h3 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize:'var(--display-5-size)',
          lineHeight:'var(--display-5-lh)', color:'var(--text-strong)', margin:0 }}>{name}</h3>
        <div style={{ marginTop:'auto', paddingTop:'16px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px' }}>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-size)', color:'var(--text-body)' }}>{price}</span>
          {onAdd ? <Button size="sm" variant="secondary" onClick={onAdd}>Add</Button> : null}
        </div>
      </div>
    </article>
  );
}
