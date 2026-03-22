import { cn } from "@/src/shared/lib/utils/utils";
import { BlockSearch } from "./search";
import { BlockUser } from "./user";
import { Logo } from "@/src/shared/ui/Logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background px-4 md:px-8 py-3">
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 ",
        )}
      >
        <div className="flex shrink-0 items-center">
          <Logo />
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
