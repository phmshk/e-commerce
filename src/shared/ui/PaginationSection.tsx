"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/shared/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { ELLIPSIS, usePagination } from "@/src/shared/hooks/use-pagination";
import { cn } from "../lib/utils";

interface PaginationSectionProps {
  totalPages: number;
  currentPage: number;
  className?: string;
}

export const PaginationSection = (props: PaginationSectionProps) => {
  const { totalPages, currentPage, className } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paginationRange = usePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className={cn("mt-10 mb-6", className)}>
      <PaginationContent>
        {/* back button  */}
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? createPageURL(currentPage - 1) : "#"}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={cn(
              "transition-all active:scale-95",
              currentPage <= 1 && "pointer-events-none opacity-50",
            )}
          />
        </PaginationItem>

        {/* pages */}
        {paginationRange.map((page, index) => (
          <PaginationItem key={`page-${page}-${index}`}>
            {page === ELLIPSIS ? (
              <PaginationEllipsis className="text-muted-foreground select-none" />
            ) : (
              <PaginationLink
                href={createPageURL(page)}
                isActive={currentPage === page}
                className={cn(
                  "min-w-10 h-10 transition-all active:scale-90",
                  currentPage === page
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    : "hover:bg-accent",
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* next button */}
        <PaginationItem>
          <PaginationNext
            href={
              currentPage < totalPages ? createPageURL(currentPage + 1) : "#"
            }
            aria-disabled={currentPage >= totalPages}
            tabIndex={currentPage >= totalPages ? -1 : undefined}
            className={cn(
              "transition-all active:scale-95",
              currentPage >= totalPages && "pointer-events-none opacity-50",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
