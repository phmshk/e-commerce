"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/src/shared/lib/utils/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { formatSegment } from "../model/utils";
import { ROUTES } from "@/src/shared/config/routes";

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;

      const label = formatSegment(segment, "full");

      return {
        href,
        label,
        isLast,
      };
    });
  }, [pathname]);

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("w-full p-3 max-w-[1440px] mx-auto", className)}
    >
      <Breadcrumb>
        <BreadcrumbList className="flex-wrap sm:gap-1">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={ROUTES.MAIN.HOME.path}
                className="flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md"
              >
                <Home className="size-4 shrink-0" />
                <span className="sr-only sm:not-sr-only">
                  {ROUTES.MAIN.HOME.labels.short}
                </span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {breadcrumbs.map((crumb) => (
            <Fragment key={crumb.href}>
              <BreadcrumbSeparator>
                <ChevronRight className="size-3.5 text-muted-foreground" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {crumb.isLast ? (
                  <BreadcrumbPage className="font-medium text-foreground max-w-[150px] truncate sm:max-w-none">
                    {crumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-primary max-w-[120px] truncate sm:max-w-none"
                    >
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};
