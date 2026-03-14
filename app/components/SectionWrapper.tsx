import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/shadcn/components/ui/button";

interface SectionWrapperProps {
  title: string;
  actionHref?: string;
  actionLabel?: string;
  children: ReactNode;
}

export function SectionWrapper({
  title,
  actionHref,
  actionLabel = "View all",
  children,
}: SectionWrapperProps) {
  return (
    <section className="my-8 w-full md:my-12 lg:my-16 col-start-2">
      <div className="mb-6 flex items-end justify-between md:mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>

        {/* Optional "View all" link for the section */}
        {actionHref && (
          <Button variant="link" className="group hidden sm:flex" asChild>
            <Link href={actionHref}>
              {actionLabel}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>

      {children}

      {/* Mobile view all button */}
      {actionHref && (
        <Button variant="outline" className="mt-6 w-full sm:hidden" asChild>
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </section>
  );
}
