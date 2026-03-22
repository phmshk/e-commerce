import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProductApi,
  ProductGrid,
  ProductCategoryType,
} from "@/src/entities/product";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";
import { getValidPage, SearchParams } from "@/src/shared/lib/utils/pagination";
import { cache } from "react";

export const revalidate = 3600;

const getCategory = cache(async (categoryId: string) => {
  return await ProductApi.getCategoryById(categoryId as ProductCategoryType);
});

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categoryId } = await props.params;
  const category = await getCategory(categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.title} | Catalog`,
    description: `Explore our collection of ${category.title.toLowerCase()} products.`,
  };
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: SearchParams;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;
  const { category: categoryId } = await params;

  const category = await getCategory(categoryId);

  if (!category) notFound();

  const currentPage = await getValidPage(searchParams);
  const { items, metadata } = await ProductApi.getProductsByCategory({
    page: currentPage,
    category: categoryId,
  });

  return (
    <BasePageLayout title={category.title}>
      <ProductGrid products={items} full />
      <PaginationSection
        totalPages={metadata.pages}
        currentPage={metadata.currentPage}
      />
    </BasePageLayout>
  );
}
