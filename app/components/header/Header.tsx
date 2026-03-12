import { cn } from "@/app/lib/utils";
import { BlockLogo } from "./BlockLogo";
import { BlockSearch } from "./search/BlockSearch";
import { BlockUser } from "./user/BlockUser";

export const Header = () => {
  return (
    <header
      className={cn(
        "bg-header-bg border-b border-border w-full relative z-10",
        "flex flex-col md:flex-row justify-center",
        "md:gap-y-5 xl:gap-y-10 md:p-2",
      )}
    >
      <div className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center ">
        <BlockLogo />
        <BlockSearch />
      </div>
      <BlockUser />
    </header>
  );
};
