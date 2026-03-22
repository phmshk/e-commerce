import { ROUTES } from "@/src/shared/config/routes";
import { cn } from "@/src/shared/lib/utils/utils";
import { Button } from "@/src/shared/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export const CatalogButton = () => {
  return (
    <Link href={ROUTES.SHOP.CATALOG.path}>
      <Button
        variant="default"
        className={cn(
          "hidden md:flex h-10 gap-4 px-3 lg:w-32 justify-start",
          "transition-all duration-300 shadow-sm hover:shadow-md active:scale-95",
        )}
      >
        <Menu className="size-6" />
        <span className="hidden lg:block text-base font-medium">
          {ROUTES.SHOP.CATALOG.labels.short}
        </span>
      </Button>
    </Link>
  );
};
