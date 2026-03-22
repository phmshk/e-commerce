import { getPaginatedData } from "@/src/shared/lib/db/dbService";
import { PaginationParams } from "@/src/shared/lib/db/types";
import { Category, Product, ProductDocument } from "..";
import { CategoryType, ProductType } from "../model/types";
import dbConnect from "@/src/shared/lib/db/dbConnect";

function serializeData<T>(data: unknown): T {
  if (data === undefined) return undefined as unknown as T;
  return JSON.parse(JSON.stringify(data)) as T;
}

export const ProductApi = {
  async getProducts(params: PaginationParams<ProductType>) {
    return getPaginatedData<ProductType, ProductDocument>(Product, params);
  },

  async getCategories() {
    await dbConnect();
    const categories = await Category.find().sort({ order: 1 }).lean<CategoryType[]>();
    return serializeData<CategoryType[]>(categories);
  },

  async getCategoryById(id: CategoryType["category_id"]) {
    await dbConnect();
    const category = await Category.findOne({ category_id: id }).lean<CategoryType>();
    return serializeData<CategoryType>(category);
  },

  async getProductsByCategory(params: PaginationParams<ProductType> & { category: string }) {
    return getPaginatedData<ProductType, ProductDocument>(Product, {
      ...params,
      filter: { ...params.filter, categories: params.category },
    });
  },

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
