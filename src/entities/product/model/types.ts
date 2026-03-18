export const PRODUCT_BADGE_TYPES = ["new", "bestseller", "limited"] as const;

export type ProductBadgeType = (typeof PRODUCT_BADGE_TYPES)[number];

export const PRODUCT_CATEGORIES = [
  "lighting",
  "workspace",
  "wellness",
  "electronics",
  "security",
  "audio",
] as const;

export type ProductCategoryType = (typeof PRODUCT_CATEGORIES)[number];

export interface ProductType {
  id: string;
  img: string;
  title: string;
  description: string;
  basePrice: number;
  discountPercent: number;
  rating: number;
  categories: ProductCategoryType[];
  stock?: number;
  manualBadges: ProductBadgeType[];
}
