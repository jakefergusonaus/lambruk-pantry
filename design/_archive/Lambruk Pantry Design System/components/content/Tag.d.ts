import * as React from 'react';

/** Pill chip for dietary/allergen claims and category labels ("Low FODMAP", "Gluten-Free"). */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "paper" */
  tone?: 'paper' | 'outline' | 'onDark' | 'accent';
  /** @default "md" */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
