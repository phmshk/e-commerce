import { Input } from "@/src/shared/ui/input";
import { Search } from "lucide-react";

export const BlockInput = () => {
  return (
    <div className="min-w-[260px] flex-1 w-full relative">
      <Input
        id="search-input"
        type="text"
        placeholder="Search products..."
        className="h-10 w-full pr-10 focus-visible:ring-primary focus-visible:ring-1"
      />
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-muted-foreground/60">
        <Search className="size-6" />
      </div>
    </div>
  );
};
