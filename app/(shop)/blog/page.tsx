import { Metadata } from "next";
import { PostApi, PostGrid } from "@/src/entities/post";
import { BasePageLayout } from "@/src/shared/ui/BasePage";
import { PaginationSection } from "@/src/shared/ui/PaginationSection";
import { getValidPage, SearchParams } from "@/src/shared/lib/utils/pagination";

export const metadata: Metadata = {
  title: "Lumia Guides & News | Official Blog",
  description:
    "Stay updated with the latest in smart home tech, how-to guides, and company news from Lumia.",
};

export const revalidate = 3600;

interface BlogPageProps {
  searchParams: SearchParams;
}

export default async function BlogPage(props: BlogPageProps) {
  const { searchParams } = props;
  const currentPage = await getValidPage(searchParams);
  const { items, metadata } = await PostApi.getLatestPosts({
    page: currentPage,
  });

  return (
    <BasePageLayout title="Lumia Guides & News">
      <PostGrid posts={items} full />
      <PaginationSection
        totalPages={metadata.pages}
        currentPage={metadata.currentPage}
      />
    </BasePageLayout>
  );
}
