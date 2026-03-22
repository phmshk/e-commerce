import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { cn } from "@/src/shared/lib/utils/utils";
import { CategoryCardSkeleton } from "@/src/entities/product/ui/categories/CategoryCardSceleton";
import {
  CATEGORY_LAYOUT_MAP,
  CategoryLayoutType,
} from "@/src/entities/product";

export default function CatalogLoading() {
  const skeletons: CategoryLayoutType[] = [
    "hero", // Smart Lighting
    "standard", // Minimalist Workspace
    "standard", // Modern Wellness
    "standard", // Eco Electronics
    "standard", // Home Security
    "featured", // Premium Audio
  ];

  return (
    <BasePageLayout title="Catalog">
      <div className="grid grid-flow-dense grid-cols-2 gap-4 md:grid-cols-6 lg:gap-6 xl:grid-cols-12">
        {skeletons.map((layout, index) => (
          <CategoryCardSkeleton
            key={index}
            className={cn(CATEGORY_LAYOUT_MAP[layout])}
          />
        ))}
      </div>
    </BasePageLayout>
  );
}
