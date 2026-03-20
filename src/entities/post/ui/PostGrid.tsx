import { MAX_POSTS_IN_GRID_MAIN } from "../model/constants";
import { PostType } from "../model/types";
import { PostCard } from "./PostCard";

interface PostGridProps {
  posts: PostType[];
  full?: boolean;
}

export const PostGrid = (props: PostGridProps) => {
  const { posts, full = false } = props;
  if (!posts || posts.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-muted-foreground/25 p-12">
        <p className="text-muted-foreground">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        let visibilityClass = "block";

        if (!full) {
          if (index > 0) {
            visibilityClass = "hidden sm:block";
          }

          if (index === MAX_POSTS_IN_GRID_MAIN - 1) {
            visibilityClass = "lg:hidden";
          }
        }

        return (
          <div key={post.id} className={visibilityClass}>
            <PostCard
              post={post}
              prioritizeLoading={index < MAX_POSTS_IN_GRID_MAIN}
            />
          </div>
        );
      })}
    </div>
  );
};
