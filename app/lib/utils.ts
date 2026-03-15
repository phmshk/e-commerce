import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { Product, ProductBadgeType } from "@/app/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (date: string) => {
  return format(new Date(date), "MMM d, yyyy");
};

export const BADGE_CONFIG: Record<
  ProductBadgeType,
  { label: string; variant: ProductBadgeType }
> = {
  new: { label: "New", variant: "new" },
  bestseller: { label: "Bestseller", variant: "bestseller" },
  limited: { label: "Limited", variant: "limited" },
};

export function getActiveBadges(product: Product): ProductBadgeType[] {
  const activeBadges = new Set<ProductBadgeType>(product.manualBadges || []);

  if (product.rating >= 4.8) {
    activeBadges.add("bestseller");
  }

  return Array.from(activeBadges);
}
