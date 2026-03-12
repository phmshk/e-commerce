import { Menu } from "lucide-react";

export const SearchButton = () => {
  return (
    <button className="bg-primary hover:shadow-hover active:shadow-pressed hidden md:flex w-10 lg:w-32 gap-4 p-2 cursor-pointer duration-300 rounded">
      <Menu className="size-6 text-primary-foreground" />
      <span className="hidden lg:block text-base text-primary-foreground">
        Catalog
      </span>
    </button>
  );
};
