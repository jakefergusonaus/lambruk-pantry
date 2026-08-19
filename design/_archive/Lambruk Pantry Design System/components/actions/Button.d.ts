import * as React from 'react';

/**
 * Lambruk's primary action. Navy primary, hairline secondary, gold accent for
 * CTAs on paper, reversed onDark for navy panels, ghost for inline links.
 * Labels are Title Case ("Shop Now", "Become a Stockist").
 *
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'onDark' | 'onDarkOutline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor. */
  href?: string;
  /** Override the rendered element. */
  as?: keyof JSX.IntrinsicElements;
  /** @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
