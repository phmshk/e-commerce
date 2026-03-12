import { Search } from "lucide-react";

export const BlockInput = () => {
  return (
    <div className="min-w-[260px] relative grow">
      <input
        id="search-input"
        type="text"
        placeholder="Search products..."
        className="w-full h-10 rounded p-2 outline outline-primary focus:shadow-subtle"
      />
      <div className="absolute top-2 right-2 pointer-events-none">
        <Search className="size-6" />
      </div>
    </div>
  );
};
