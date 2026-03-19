import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { ProductGrid, Product, ProductType } from "@/src/entities/product";

export const metadata: Metadata = {
  title: "New Arrivals | Lumia Official Store",
  description:
    "Discover the latest innovations in smart home technology, electronics, and gadgets at Lumia.",
};

export const revalidate = 3600;

export default async function NewArrivalsPage() {
  await dbConnect();
  const products = await Product.find({ manualBadges: "new" })
    .select("-_id -__v")
    .sort({ createdAt: -1 })
    .lean<ProductType[]>();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        New Arrivals
      </h1>
      <ProductGrid products={products} full />
    </div>
  );
}
