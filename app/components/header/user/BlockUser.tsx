import { Profile } from "./Profile";
import { TopMenu } from "./TopMenu";

export const BlockUser = () => {
  return (
    <nav className="Main menu">
      <div className="bg-header-bg md:bg-inherit border-t border-primary/10 md:border-none h-14 md:h-auto fixed bottom-0 right-0 left-0 md:static flex flex-row justify-between items-center w-full px-4 py-2 shadow-subtle md:shadow-none text-xs md:text-sm z-50">
        <TopMenu />
        <Profile />
      </div>
    </nav>
  );
};
