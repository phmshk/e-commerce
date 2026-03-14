import { cn } from "@/app/lib/utils";
import { Profile } from "./Profile";
import { TopMenu } from "./TopMenu";

export const BlockUser = () => {
  return (
    <nav aria-label="Main menu">
      <div
        className={cn(
          // mobile
          "fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border px-6 shadow-sm shadow-accent",
          //desktop
          "md:static md:h-auto md:border-none md:shadow-none md:px-0",
          "flex flex-row justify-between items-center w-full",
        )}
      >
        <TopMenu />
        <Profile />
      </div>
    </nav>
  );
};
