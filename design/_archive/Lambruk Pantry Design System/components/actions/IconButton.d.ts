import * as React from 'react';

/** Icon-only round action — search, cart, account, menu. Always pass a `label` for a11y. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The glyph node (a Lucide `<i data-lucide>` element or inline SVG). */
  icon?: React.ReactNode;
  /** Accessible label — also used as the tooltip. */
  label: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "ghost" */
  variant?: 'ghost' | 'outline' | 'onDark';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
