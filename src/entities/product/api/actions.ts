"use server";

import dbConnect from "@/src/shared/lib/db/dbConnect";
import { revalidatePath } from "next/cache";
import { CategoryLayoutType } from "../model/types";
import { Category } from "..";
import { ROUTES } from "@/src/shared/config/routes";

export interface UpdateCategoryPayload {
  category_id: string;
  order: number;
  layout: CategoryLayoutType;
}

export const updateCategoriesLayout = async (
  payload: UpdateCategoryPayload[],
) => {
  try {
    await dbConnect();

    const bulkOperations = payload.map((category) => ({
      updateOne: {
        filter: { category_id: category.category_id },
        update: {
          $set: {
            order: category.order,
            layout: category.layout,
          },
        },
      },
    }));

    await Category.bulkWrite(bulkOperations);

    revalidatePath(ROUTES.SHOP.CATALOG.path);

    return { success: true };
  } catch (error) {
    console.error(
      "[Category Admin] Failed to update categories layout:",
      error,
    );
    return {
      success: false,
      error: "Failed to save changes. Please try again later.",
    };
  }
};
