import { cn } from "@/src/shared/lib/utils/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "../config/routes";

export const Logo = () => {
  return (
    <Link
      href={ROUTES.MAIN.HOME.path}
      className="group flex flex-row gap-3 items-center cursor-pointer outline-none"
    >
      <div
        className={cn(
          "bg-primary/10 p-2 rounded-lg transition-colors",
          "group-hover:bg-primary/20 group-focus-visible:ring-2 group-focus-visible:ring-ring",
        )}
      >
        <ShoppingBag className="size-6 text-primary" strokeWidth={2.5} />
      </div>

      <span className="text-xl font-bold hidden md:block">
        Lumia<span className="text-primary">.</span>
      </span>
    </Link>
  );
};
