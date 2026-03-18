import { BlockInput } from "./BlockInput";
import { SearchButton } from "./SearchButton";

export const BlockSearch = () => {
  return (
    <div className="flex flex-row gap-4 w-full grow">
      <SearchButton />
      <BlockInput />
    </div>
  );
};
