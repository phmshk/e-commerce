import { PostGrid } from "@/app/components/PostGrid";
import articlesDb from "@/app/data/articles.json";
import { Post } from "@/app/types/types";

export function BlockLatestPosts() {
  const posts: Post[] = articlesDb.posts as Post[];
  return <PostGrid posts={posts} />;
}
