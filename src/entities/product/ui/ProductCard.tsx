"use client";

import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useMemo } from "react";
import { BaseCard } from "@/src/shared/ui/BaseCard";
import { Button } from "@/src/shared/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/src/shared/ui/card";
import { Badge } from "@/src/shared/ui/badge";
import { ProductType } from "../model/types";
import { getActiveBadges, BADGE_CONFIG, formatPrice } from "../model/utils";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { img, title, description, basePrice, discountPercent, rating } =
    product;

  const finalPrice = useMemo(() => {
    return product.discountPercent > 0
      ? product.basePrice * (1 - product.discountPercent / 100)
      : product.basePrice;
  }, [product.basePrice, product.discountPercent]);

  const activeBadges = useMemo(() => getActiveBadges(product), [product]);

  return (
    <BaseCard className="gap-1 mx-auto w-full max-w-[320px] rounded-2xl sm:max-w-[340px] lg:max-w-[360px] p-0">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-secondary/30 rounded-b-2xl">
        {/* Discount Badge (Top Left) */}
        <div className="absolute left-3 top-3 z-10 flex items-center flex-wrap overflow-hidden max-h-5 sm:max-h-11 gap-1 right-12">
          {discountPercent > 0 && (
            <Badge variant="sale" className="shadow-sm">
              -{discountPercent}%
            </Badge>
          )}

          {activeBadges.map((tag) => {
            const config = BADGE_CONFIG[tag];
            if (!config) return null;

            return (
              <Badge key={tag} variant={config.variant} className="shadow-sm">
                {config.label}
              </Badge>
            );
          })}
        </div>

        {/* Add to Favorites Button (Top Right) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 sm:right-3 top-1 sm:top-3 z-10 size-8 rounded-full bg-background/50 backdrop-blur-md transition-all hover:bg-background hover:text-red-500 active:scale-95"
          aria-label={`Add ${title} to favorites`}
          onClick={(e) => {
            e.preventDefault();
            // TODO: Implement wishlist toggle logic here
          }}
        >
          <Heart className="size-4" />
        </Button>

        {/* Product Image */}
        <Image
          src={img}
          alt={`${title} product shot`}
          fill
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 340px, 360px"
          className="object-contain object-center"
        />
      </div>

      {/* Main Content */}

      <CardHeader className="space-y-2 p-4 pb-0">
        <div className="flex items-center gap-1">
          <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold text-muted-foreground">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="space-y-1">
          <CardTitle className="line-clamp-1 text-lg font-bold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 min-h-10 text-sm leading-snug">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      {/* Footer with Price*/}
      <CardFooter className="flex items-end justify-between p-4 pt-2">
        <div className="flex flex-col">
          {discountPercent > 0 && (
            <span className="text-xs font-medium text-muted-foreground line-through opacity-70">
              <span className="sr-only">Old price:</span>
              {formatPrice(basePrice)}
            </span>
          )}
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            <span className="sr-only">New price:</span>
            {formatPrice(finalPrice)}
          </span>
        </div>

        <Button
          size="icon"
          className="size-10 shrink-0 rounded-2xl transition-transform active:scale-95"
          aria-label={`Add ${title} to cart`}
          onClick={(e) => {
            e.preventDefault();
            // TODO: Implement add to cart logic here
          }}
        >
          <ShoppingCart className="size-4" />
        </Button>
      </CardFooter>
    </BaseCard>
  );
};
