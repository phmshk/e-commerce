import { Metadata } from "next";
import { ProductApi, ProductGrid } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";
import { getValidPage, SearchParams } from "@/src/shared/lib/utils/pagination";
import { ROUTE_LABELS } from "@/src/shared/config/routes";

export const metadata: Metadata = {
  title: "Special Offers & Deals | Lumia Official Store",
  description:
    "Explore exclusive discounts on Lumia smart home devices, premium electronics, and next-gen gadgets. Limited time offers with worldwide shipping.",
};

export const revalidate = 3600;

interface SalesPageProps {
  searchParams: SearchParams;
}

export default async function SalesPage(props: SalesPageProps) {
  const { searchParams } = props;
  const currentPage = await getValidPage(searchParams);
  const { items, metadata } = await ProductApi.getDiscountedProducts({
    page: currentPage,
  });

  return (
    <BasePageLayout title={ROUTE_LABELS["special-offers"]}>
      <ProductGrid products={items} full />
      <PaginationSection
        totalPages={metadata.pages}
        currentPage={metadata.currentPage}
      />
    </BasePageLayout>
  );
}
