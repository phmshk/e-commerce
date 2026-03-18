import { MIN_BESTSELLER_RATING } from "./constants";
import { ProductType, ProductBadgeType } from "./types";

export function getActiveBadges(product: ProductType): ProductBadgeType[] {
  const activeBadges = new Set<ProductBadgeType>(product.manualBadges || []);

  if (
    product.rating >= MIN_BESTSELLER_RATING &&
    !product.manualBadges.includes("new")
  ) {
    activeBadges.add("bestseller");
  }

  return Array.from(activeBadges);
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const BADGE_CONFIG: Record<
  ProductBadgeType,
  { label: string; variant: ProductBadgeType }
> = {
  new: { label: "New", variant: "new" },
  bestseller: { label: "Bestseller", variant: "bestseller" },
  limited: { label: "Limited", variant: "limited" },
};
