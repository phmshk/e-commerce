import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { getLatestPosts, PostGrid } from "@/src/entities/post";
import { BasePageLayout } from "@/src/shared/ui/BasePage";

export const metadata: Metadata = {
  title: "Lumia Guides & News | Official Blog",
  description:
    "Stay updated with the latest in smart home tech, how-to guides, and company news from Lumia.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  await dbConnect();
  const posts = await getLatestPosts();

  return (
    <BasePageLayout title="Lumia Guides & News">
      <PostGrid posts={posts} full />
    </BasePageLayout>
  );
}
