import { Metadata } from "next";
import { ProductApi, ProductGrid } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";

export const metadata: Metadata = {
  title: "Special Offers & Deals | Lumia Official Store",
  description:
    "Explore exclusive discounts on Lumia smart home devices, premium electronics, and next-gen gadgets. Limited time offers with worldwide shipping.",
};

export const revalidate = 3600;

interface SalesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SalesPage(props: SalesPageProps) {
  const { searchParams } = props;
  const params = await searchParams;
  const pageParam = Array.isArray(params.page) ? params.page[0] : params.page;
  const currentPage = Number(pageParam) || 1;
  const { items, metadata } = await ProductApi.getDiscountedProducts({
    page: currentPage,
  });

  return (
    <BasePageLayout title="Special Offers">
      <ProductGrid products={items} full />
      <PaginationSection
        totalPages={metadata.pages}
        currentPage={metadata.currentPage}
      />
    </BasePageLayout>
  );
}
