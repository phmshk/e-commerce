import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { ProductGrid, getDiscountedProducts } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";

export const metadata: Metadata = {
  title: "Special Offers & Deals | Lumia Official Store",
  description:
    "Explore exclusive discounts on Lumia smart home devices, premium electronics, and next-gen gadgets. Limited time offers with worldwide shipping.",
};

export const revalidate = 3600;

export default async function SalesPage() {
  await dbConnect();
  const products = await getDiscountedProducts();

  return (
    <BasePageLayout title="Special Offers">
      <ProductGrid products={products} full />
    </BasePageLayout>
  );
}
