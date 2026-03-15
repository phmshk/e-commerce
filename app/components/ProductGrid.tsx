import { Product as ProductCardType } from "@/app/types";
import { ProductCard } from "@/app/components/ProductCard";
import { MAX_PRODUCTS_IN_GRID_MAIN } from "@/app/constants";

interface ProductGridProps {
  products: ProductCardType[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products || products.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-muted-foreground/25 p-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    // Mobile: 2 columns, smaller gap.
    // Tablet (md): 3 columns.
    // Desktop (xl): 4 columns

    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
      {products.map((product, index) => {
        let visibilityClass = "block";

        if (index === MAX_PRODUCTS_IN_GRID_MAIN - 2) {
          visibilityClass = "hidden md:block";
        } else if (index === MAX_PRODUCTS_IN_GRID_MAIN - 1) {
          visibilityClass = "hidden xl:block";
        }

        return (
          <div key={product.id} className={visibilityClass}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};
