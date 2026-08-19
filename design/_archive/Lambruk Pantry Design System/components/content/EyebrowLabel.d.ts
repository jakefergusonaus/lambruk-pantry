import * as React from 'react';

/** Uppercase wide-tracked overline that opens most Lambruk sections ("THE LAMBRUK PROMISE"). */
export interface EyebrowLabelProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "accent" */
  tone?: 'accent' | 'onDark' | 'muted';
  /** @default "p" */
  as?: keyof JSX.IntrinsicElements;
  /** @default "left" */
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}
export declare function EyebrowLabel(props: EyebrowLabelProps): JSX.Element;
