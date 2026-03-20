import { Skeleton } from "@/src/shared/ui/skeleton";
import { CardHeader, CardContent, CardFooter } from "@/src/shared/ui/card";

export const PostCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col rounded-2xl border bg-card">
      {/* Image Wrapper Skeleton */}
      <Skeleton className="aspect-16/10 w-full rounded-b-none rounded-t-2xl" />

      <CardHeader>
        {/* Meta Skeleton (Time & Date) */}
        <div className="mb-3 flex items-center gap-2">
          <Skeleton className="h-3 w-24" />
        </div>
        {/* Title Skeleton */}
        <Skeleton className="h-7 w-full" />
        <Skeleton className="mt-1 h-7 w-2/3" />
      </CardHeader>

      <CardContent>
        {/* Preview Text Skeleton */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
      </CardContent>

      <CardFooter className="mt-auto flex justify-between">
        {/* Author Skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3.5 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        {/* Arrow CTA Skeleton */}
        <Skeleton className="size-8 rounded-full" />
      </CardFooter>
    </div>
  );
};
