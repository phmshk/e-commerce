import { Skeleton } from "@/src/shared/ui/skeleton";
import { BaseCard } from "@/src/shared/ui/BaseCard";
import { cn } from "@/src/shared/lib/utils/utils";

interface CategoryCardSkeletonProps {
  className?: string;
}

export const CategoryCardSkeleton = ({ className }: CategoryCardSkeletonProps) => {
  return (
    <div className={cn("min-h-[160px] md:min-h-[200px]", className)}>
      <BaseCard className="flex h-full w-full flex-col border-none bg-muted/30 p-6">
        <div className="flex h-full flex-col justify-between">
          <div>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="mt-2 h-4 w-1/2" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="size-4 rounded-full" />
          </div>
        </div>
      </BaseCard>
    </div>
  );
};
