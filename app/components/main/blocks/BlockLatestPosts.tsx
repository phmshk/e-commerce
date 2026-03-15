import { PostGrid } from "@/app/components/PostGrid";
import { MAX_POSTS_IN_GRID_MAIN } from "@/app/constants";
import dbConnect from "@/app/lib/dbConnect";
import Post from "@/app/models/Post";
import type { Post as PostType } from "@/app/types";

export const revalidate = 3600;

export const BlockLatestPosts = async () => {
  await dbConnect();
  const posts = await Post.find({})
    .sort({ publishedAt: -1 })
    .limit(MAX_POSTS_IN_GRID_MAIN)
    .select("-_id -__v")
    .lean<PostType[]>();

  return <PostGrid posts={posts} />;
};
