import { cn } from "@/app/lib/utils";
import { BlockLogo } from "./BlockLogo";
import { BlockSearch } from "./search/BlockSearch";
import { BlockUser } from "./user/BlockUser";

export const Header = () => {
  return (
    <header className="relative z-50 w-full border-b border-border bg-header-bg">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3",
          "md:flex-row md:px-8",
        )}
      >
        <div className="flex shrink-0 items-center">
          <BlockLogo />
        </div>

        <div className="flex w-full flex-1 items-center justify-center md:px-6 lg:px-12">
          <BlockSearch />
        </div>

        <div className="flex shrink-0 items-center justify-end">
          <BlockUser />
        </div>
      </div>
    </header>
  );
};
