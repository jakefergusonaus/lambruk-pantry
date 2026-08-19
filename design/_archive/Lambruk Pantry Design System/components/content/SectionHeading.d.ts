import * as React from 'react';

/**
 * The standard Lambruk section opener: gold eyebrow, Instrument Serif title,
 * optional supporting sentence and a right-aligned action link.
 *
 */
export interface SectionHeadingProps {
  /** All-caps overline. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Trailing node, usually a ghost Button ("Shop all"). */
  action?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Use "dark" on navy bands. @default "light" */
  tone?: 'light' | 'dark';
  /** Heading level, also picks the display size. @default 2 */
  level?: 2 | 3 | 4;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
