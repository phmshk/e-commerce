import dbConnect from "@/src/shared/lib/dbConnect";
import { Metadata } from "next";
import { Post, PostGrid, PostType } from "@/src/entities/post";

export const metadata: Metadata = {
  title: "Lumia Guides & News | Official Blog",
  description:
    "Stay updated with the latest in smart home tech, how-to guides, and company news from Lumia.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  await dbConnect();
  const posts = await Post.find({})
    .sort({ publishedAt: -1 })
    .select("-_id -__v")
    .lean<PostType[]>();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Lumia Guides & News
      </h1>
      <PostGrid posts={posts} full />
    </div>
  );
}
