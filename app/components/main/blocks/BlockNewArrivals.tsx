import db from "@/app/data/db.json";
import { ProductGrid } from "@/app/components/ProductGrid";

export const BlockNewArrivals = () => {
  const newProducts = db.products.filter((p) => p.categories.includes("new"));

  return <ProductGrid products={newProducts} />;
};
