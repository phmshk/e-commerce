import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { ProductGrid, Product, ProductType } from "@/src/entities/product";

export const metadata: Metadata = {
  title: "Special Offers & Deals | Lumia Official Store",
  description:
    "Explore exclusive discounts on Lumia smart home devices, premium electronics, and next-gen gadgets. Limited time offers with worldwide shipping.",
  keywords: [
    "Lumia deals",
    "smart home sale",
    "electronics discounts",
    "premium gadgets sale",
    "Lumia offers",
  ],
};

export const revalidate = 3600;

export default async function SalesPage() {
  await dbConnect();
  const products = await Product.find({ discountPercent: { $gt: 0 } })
    .select("-_id -__v")
    .sort({ discountPercent: -1 })
    .lean<ProductType[]>();

  return <ProductGrid products={products} />;
}
