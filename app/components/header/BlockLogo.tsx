import { cn } from "@/app/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const BlockLogo = () => {
  return (
    <Link
      href="/"
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
        Luma<span className="text-primary">.</span>
      </span>
    </Link>
  );
};
