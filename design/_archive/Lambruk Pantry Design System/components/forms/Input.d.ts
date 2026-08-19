import * as React from 'react';

/** Labelled text field with a warm hairline border and gold focus ring. Use `tone="dark"` inside navy panels. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message; replaces the hint and reddens the border to gold-700. */
  error?: React.ReactNode;
  /** @default "light" */
  tone?: 'light' | 'dark';
}
export declare function Input(props: InputProps): JSX.Element;
