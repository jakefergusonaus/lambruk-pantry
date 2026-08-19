import React from 'react';
import { Button } from '../actions/Button.jsx';
import { Input } from './Input.jsx';

export function Newsletter({ title='Subscribe to Seasonal Dispatches',
  description='Recieve recipes, partner crop-reports, and first access to seasonal small-batch releases.',
  placeholder='Enter your email', cta='Subscribe', tone='dark', onSubmit, style }) {
  const [value, setValue] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const dark = tone === 'dark';
  return (
    <div style={{ textAlign:'center', maxWidth:'var(--measure-prose)', margin:'0 auto', ...style }}>
      <h2 style={{ fontFamily:'var(--font-serif-display)', fontWeight:400, fontSize:'var(--display-3-size)',
        lineHeight:'var(--display-3-lh)', color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)', margin:0 }}>{title}</h2>
      <p style={{ fontFamily:'var(--font-sans)', fontSize:'var(--body-size)', lineHeight:'var(--body-lh)',
        color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', margin:'16px auto 32px', maxWidth:'560px' }}>{description}</p>
      <form onSubmit={(e)=>{e.preventDefault(); setSent(true); onSubmit && onSubmit(value);}}
        style={{ display:'flex', gap:'12px', maxWidth:'520px', margin:'0 auto', alignItems:'flex-start' }}>
        <Input tone={tone} name="email" type="email" placeholder={placeholder} value={value}
          onChange={(e)=>setValue(e.target.value)} aria-label="Email" />
        <Button type="submit" variant={dark?'accent':'primary'} style={{ height:'48px', flexShrink:0 }}>{sent?'Subscribed':cta}</Button>
      </form>
    </div>
  );
}
