export const PRODUCT_BADGE_TYPES = ["new", "bestseller", "limited"] as const;

export type ProductBadgeType = (typeof PRODUCT_BADGE_TYPES)[number];

export interface Product {
  id: string;
  img: string;
  title: string;
  description: string;
  basePrice: number;
  discountPercent: number;
  rating: number;
  categories: string[];
  stock?: number;
  manualBadges: ProductBadgeType[];
}
