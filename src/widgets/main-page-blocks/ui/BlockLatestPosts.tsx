import {
  MAX_POSTS_IN_GRID_MAIN,
  Post,
  PostGrid,
  PostType,
} from "@/src/entities/post";
import dbConnect from "@/src/shared/lib/db/dbConnect";

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
