import { ProductGrid } from "@/app/components/ProductGrid";
import { MAX_PRODUCTS_IN_GRID_MAIN } from "@/app/constants";
import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import type { Product as ProductType } from "@/app/types/";

export const revalidate = 3600;

export const BlockNewArrivals = async () => {
  await dbConnect();
  const products = await Product.find({ manualBadges: "new" })
    .limit(MAX_PRODUCTS_IN_GRID_MAIN)
    .select("-_id -__v")
    .lean<ProductType[]>();

  return <ProductGrid products={products} />;
};
