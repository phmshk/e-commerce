import { Metadata } from "next";
import { ProductApi, ProductGrid } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";
import { getValidPage, SearchParams } from "@/src/shared/lib/utils/pagination";

export const metadata: Metadata = {
  title: "New Arrivals | Lumia Official Store",
  description:
    "Discover the latest innovations in smart home technology, electronics, and gadgets at Lumia.",
};

export const revalidate = 3600;

interface NewArrivalsPageProps {
  searchParams: SearchParams;
}

export default async function NewArrivalsPage(props: NewArrivalsPageProps) {
  const { searchParams } = props;
  const currentPage = await getValidPage(searchParams);
  const { items, metadata } = await ProductApi.getNewArrivals({
    page: currentPage,
  });

  return (
    <BasePageLayout title="New Arrivals">
      <ProductGrid products={items} full />
      <PaginationSection
        totalPages={metadata.pages}
        currentPage={metadata.currentPage}
      />
    </BasePageLayout>
  );
}
