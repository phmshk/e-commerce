import { Post } from "@/app/types/types";
import { PostCard } from "@/app/components/PostCard";

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-muted-foreground/25 p-12">
        <p className="text-muted-foreground">No articles found.</p>
      </div>
    );
  }

  const displayPosts = posts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
