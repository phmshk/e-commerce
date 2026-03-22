import { ProductCardSkeleton } from "@/src/entities/product/ui/ProductCardSceleton";
import { BasePageLayout } from "@/src/shared/ui/BasePage";

export default function CategoryLoading() {
  const skeletons = Array.from({ length: 8 });

  return (
    <BasePageLayout title="Loading products...">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {skeletons.map((_, index) => (
          <div key={index} className="block">
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </BasePageLayout>
  );
}
