import { CategoryLayoutType } from "../model/types";

export const CATEGORY_LAYOUT_MAP: Record<CategoryLayoutType, string> = {
  hero: "col-span-2 md:col-span-6 xl:col-span-8",
  featured: "col-span-2 md:col-span-3 xl:col-span-6",
  standard: "col-span-1 md:col-span-2 xl:col-span-4",
};
