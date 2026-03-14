import { ProductCard as ProductCardType } from "@/app/types/types";
import { ProductCard } from "@/app/components/ProductCard";

interface ProductGridProps {
  products: ProductCardType[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-muted-foreground/25 p-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  const displayProducts = products.slice(0, 4);

  return (
    // Mobile: 2 columns, smaller gap.
    // Tablet (md): 3 columns.
    // Desktop (xl): 4 columns

    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6 xl:grid-cols-4">
      {displayProducts.map((product, index) => {
        let visibilityClass = "block";

        if (index === 2) {
          visibilityClass = "hidden md:block";
        } else if (index === 3) {
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
}
