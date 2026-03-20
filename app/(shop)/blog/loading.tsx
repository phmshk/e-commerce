import { PostCardSkeleton } from "@/src/entities/post/ui/PostCardSceleton";
import { BasePageLayout } from "@/src/shared/ui/BasePage";

export default function BlogLoading() {
  const skeletons = Array.from({ length: 6 });

  return (
    <BasePageLayout title="Lumia Guides & News">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skeletons.map((_, index) => (
          <div key={index} className="block">
            <PostCardSkeleton />
          </div>
        ))}
      </div>
    </BasePageLayout>
  );
}
