import { Metadata } from "next";
import { ProductApi, ProductGrid } from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";

export const metadata: Metadata = {
  title: "New Arrivals | Lumia Official Store",
  description:
    "Discover the latest innovations in smart home technology, electronics, and gadgets at Lumia.",
};

export const revalidate = 3600;

interface NewArrivalsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NewArrivalsPage(props: NewArrivalsPageProps) {
  const { searchParams } = props;
  const params = await searchParams;
  const pageParam = Array.isArray(params.page) ? params.page[0] : params.page;
  const currentPage = Number(pageParam) || 1;
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
