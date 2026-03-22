"use client";

import Link from "next/link";
import { CategoryLayoutType, CategoryType } from "../../model/types";
import { ROUTES } from "@/src/shared/config/routes";
import { cn } from "@/src/shared/lib/utils/utils";
import { BaseCard } from "@/src/shared/ui/BaseCard";
import { ArrowRight, GripHorizontal } from "lucide-react";
import { useSortable } from "@dnd-kit/react/sortable";
import { CATEGORY_LAYOUT_MAP } from "../../lib/grid-mapping";
import { CardSizeSelector } from "./CardSizeSelector";

interface CategoryCardProps {
  category: CategoryType;
  isEditing: boolean;
  index: number;
  onLayoutChange: (id: string, layout: CategoryLayoutType) => void;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { category, isEditing, index, onLayoutChange } = props;
  const { category_id, title, layout } = category;

  const { ref, handleRef } = useSortable({
    id: category_id,
    index,
    disabled: !isEditing,
  });

  const Wrapper = isEditing ? "div" : Link;

  return (
    <Wrapper
      ref={ref}
      href={ROUTES.SHOP.CATEGORY(category_id)}
      className={cn(
        "group relative flex min-h-[160px] md:min-h-[200px]",
        CATEGORY_LAYOUT_MAP[layout || "standard"],
      )}
    >
      <BaseCard className="relative flex h-full w-full flex-col justify-between border-none bg-muted/30 p-6 group-hover:bg-muted/50">
        {isEditing && (
          <CardSizeSelector
            category_id={category_id}
            onLayoutChange={onLayoutChange}
          />
        )}
        {isEditing && (
          <div
            ref={handleRef}
            className="flex cursor-grab items-center justify-center rounded-md p-1.5 text-muted-foreground hover:bg-muted touch-none select-none active:cursor-grabbing absolute bottom-2 right-2"
          >
            <GripHorizontal className="size-5" />
          </div>
        )}
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore our {title.toLowerCase()} collection
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
            Browse Products
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </BaseCard>
    </Wrapper>
  );
};
