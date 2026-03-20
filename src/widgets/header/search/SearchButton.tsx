import { cn } from "@/src/shared/lib/utils/utils";
import { Button } from "@/src/shared/ui/button";
import { Menu } from "lucide-react";

export const SearchButton = () => {
  return (
    <Button
      variant="default"
      className={cn(
        "hidden md:flex h-10 gap-4 px-3 lg:w-32 justify-start",
        "transition-all duration-300 shadow-sm hover:shadow-md active:scale-95",
      )}
    >
      <Menu className="size-6" />
      <span className="hidden lg:block text-base font-medium">Catalog</span>
    </Button>
  );
};
