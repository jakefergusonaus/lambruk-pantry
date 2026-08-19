import * as React from 'react';

/**
 * Shop card — clipped photo, gold category eyebrow, serif product name, price and Add action.
 * Hover lifts the card 2px and gently scales the photo to 1.03.
 *
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Product photo URL. */
  image?: string;
  imageAlt?: string;
  /** Category eyebrow, e.g. "Preserves". */
  category?: React.ReactNode;
  name: React.ReactNode;
  /** Pre-formatted price string, e.g. "$18.00". */
  price?: React.ReactNode;
  /** Optional corner badge, e.g. "New". */
  badge?: React.ReactNode;
  /** Show the Add button and handle the click. */
  onAdd?: () => void;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
