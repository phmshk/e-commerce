"use client";

import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { ProductCard as ProductCardType } from "@/app/types/types";
import { Button } from "@/app/shadcn/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/shadcn/components/ui/card";
import { formatPrice } from "@/app/lib/utils";
import { Badge } from "@/app/shadcn/components/ui/badge";
import { BaseCard } from "@/app/components/BaseCard";

interface ProductCardProps {
  product: ProductCardType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { img, title, description, basePrice, discountPercent, rating } =
    product;

  const finalPrice =
    discountPercent > 0 ? basePrice * (1 - discountPercent / 100) : basePrice;

  return (
    <BaseCard className="gap-1 mx-auto w-full max-w-[320px] rounded-2xl sm:max-w-[340px] lg:max-w-[360px] p-0">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-secondary/30 rounded-b-2xl">
        {/* Discount Badge (Top Left) */}
        {discountPercent > 0 && (
          <Badge
            className="absolute left-3 top-3 z-10 shadow-sm"
            variant="sale"
          >
            -{discountPercent}%
          </Badge>
        )}

        {/* Add to Favorites Button (Top Right) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 z-10 h-8 w-8 rounded-full bg-background/50 backdrop-blur-md transition-all hover:bg-background hover:text-red-500 active:scale-95"
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
              {formatPrice(basePrice)}
            </span>
          )}
          <span className="text-xl font-extrabold tracking-tight text-foreground">
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
}
