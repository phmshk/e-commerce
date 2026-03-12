import { BlockLogo } from "./BlockLogo";
import { BlockSearch } from "./search/BlockSearch";
import { BlockUser } from "./user/BlockUser";

export const Header = () => {
  return (
    <header className="bg-header-bg border-b border-primary/10  w-full md:shadow-subtle flex flex-col md:flex-row md:gap-y-5 xl:gap-y-10 md:p-2 justify-center relative z-10">
      <div className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow-subtle md:shadow-none">
        <BlockLogo />
        <BlockSearch />
      </div>
      <BlockUser />
    </header>
  );
};
