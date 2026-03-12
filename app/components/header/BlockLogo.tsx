import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const BlockLogo = () => {
  return (
    <Link href="/" className="flex flex-row gap-3 items-center cursor-pointer">
      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
        <ShoppingBag className="w-6 h-6 text-primary" strokeWidth={2.5} />
      </div>

      <span className="text-xl font-bold tracking-tight text-foreground hidden md:block">
        Luma<span className="text-primary">.</span>
      </span>
    </Link>
  );
};
