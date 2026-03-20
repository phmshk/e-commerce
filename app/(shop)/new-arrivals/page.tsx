import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { ProductGrid, getNewArrivals } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";

export const metadata: Metadata = {
  title: "New Arrivals | Lumia Official Store",
  description:
    "Discover the latest innovations in smart home technology, electronics, and gadgets at Lumia.",
};

export const revalidate = 3600;

export default async function NewArrivalsPage() {
  await dbConnect();
  const products = await getNewArrivals();

  return (
    <BasePageLayout title="New Arrivals">
      <ProductGrid products={products} full />
    </BasePageLayout>
  );
}
