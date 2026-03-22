import { Metadata } from "next";
import { ProductApi, CategoryGrid } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { ROUTES } from "@/src/shared/config/routes";

export const metadata: Metadata = {
  title: "Catalog | Lumia Official Store",
  description:
    "Browse our extensive collection of smart home technology, electronics, and lifestyle products.",
};

export const revalidate = 3600;

export default async function CatalogPage() {
  const categories = await ProductApi.getCategories();

  return (
    <BasePageLayout title={ROUTES.SHOP.CATALOG.labels.full}>
      <CategoryGrid initialCategories={categories} />
    </BasePageLayout>
  );
}
