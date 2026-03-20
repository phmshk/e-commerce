import {
  MAX_PRODUCTS_IN_GRID_MAIN,
  Product,
  ProductGrid,
  ProductType,
} from "@/src/entities/product";
import dbConnect from "@/src/shared/lib/db/dbConnect";

export const revalidate = 3600;

export const BlockNewArrivals = async () => {
  await dbConnect();
  const products = await Product.find({ manualBadges: "new" })
    .limit(MAX_PRODUCTS_IN_GRID_MAIN)
    .select("-_id -__v")
    .lean<ProductType[]>();

  return <ProductGrid products={products} />;
};
