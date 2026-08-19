import * as React from 'react';

/** Small uppercase marker for awards, "New" flags and statuses. Sits on imagery or cards. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "accent" */
  tone?: 'accent' | 'navy' | 'paper';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
