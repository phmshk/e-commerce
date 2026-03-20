import { getPaginatedData } from "@/src/shared/lib/db/dbService";
import { PaginationParams } from "@/src/shared/lib/db/types";
import { Product, ProductDocument } from "..";
import { ProductType } from "../model/types";

export const ProductApi = {
  async getNewArrivals(params: PaginationParams<ProductType>) {
    return getPaginatedData<ProductType, ProductDocument>(Product, {
      ...params,
      filter: { ...params.filter, manualBadges: "new" },
    });
  },

  async getDiscountedProducts(params: PaginationParams<ProductType>) {
    return getPaginatedData<ProductType, ProductDocument>(Product, {
      ...params,
      filter: { ...params.filter, discountPercent: { $gt: 0 } },
      sort: { discountPercent: -1 },
    });
  },
};
