import { BlockInput } from "./BlockInput";
import { CatalogButton } from "./CatalogButton";

export const BlockSearch = () => {
  return (
    <div className="flex flex-row gap-4 w-full grow">
      <CatalogButton />
      <BlockInput />
    </div>
  );
};
