import { BlockInput } from "./BlockInput";
import { SearchButton } from "./SearchButton";

export const BlockSearch = () => {
  return (
    <div className="flex flex-row gap-4 grow max-w-2xl">
      <SearchButton />
      <BlockInput />
    </div>
  );
};
