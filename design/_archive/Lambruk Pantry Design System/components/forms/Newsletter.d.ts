import * as React from 'react';

/**
 * Centred email-capture block that closes the homepage, set on the navy band.
 *
 */
export interface NewsletterProps {
  /** @default "Subscribe to Seasonal Dispatches" */
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** @default "Enter your email" */
  placeholder?: string;
  /** @default "Subscribe" */
  cta?: string;
  /** @default "dark" */
  tone?: 'light' | 'dark';
  onSubmit?: (email: string) => void;
  style?: React.CSSProperties;
}
export declare function Newsletter(props: NewsletterProps): JSX.Element;
