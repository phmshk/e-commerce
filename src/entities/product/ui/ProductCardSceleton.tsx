import { Skeleton } from "@/src/shared/ui/skeleton";
import { CardHeader, CardFooter } from "@/src/shared/ui/card";

export const ProductCardSkeleton = () => {
  return (
    <div className="mx-auto flex w-full max-w-[320px] flex-col gap-1 rounded-2xl border bg-card p-0 shadow-sm sm:max-w-[340px] lg:max-w-[360px]">
      {/* Image Container Skeleton */}
      <Skeleton className="aspect-square w-full rounded-b-2xl rounded-t-2xl" />

      {/* Main Content Skeleton */}
      <CardHeader className="space-y-2 p-4 pb-0">
        {/* Rating Skeleton */}
        <div className="flex items-center gap-1">
          <Skeleton className="size-3.5 rounded-full" />
          <Skeleton className="h-3 w-6" />
        </div>

        {/* Title & Description Skeleton */}
        <div className="space-y-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardHeader>

      {/* Footer Skeleton */}
      <CardFooter className="flex items-end justify-between p-4 pt-2">
        <div className="flex flex-col gap-1.5">
          {/* Old Price */}
          <Skeleton className="h-3 w-10" />
          {/* New Price */}
          <Skeleton className="h-7 w-20" />
        </div>

        {/* Cart Button Skeleton */}
        <Skeleton className="size-10 shrink-0 rounded-2xl" />
      </CardFooter>
    </div>
  );
};
