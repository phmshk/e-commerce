import db from "@/app/data/db.json";
import { ProductGrid } from "@/app/components/ProductGrid";

export const BlockSales = () => {
  const discountProducts = db.products.filter((p) =>
    p.categories.includes("discounted"),
  );

  return <ProductGrid products={discountProducts} />;
};
