import { Product } from "..";
import { ProductType } from "../model/types";

export const getDiscountedProducts = async () => {
  return await Product.find({ discountPercent: { $gt: 0 } })
    .sort({ discountPercent: -1 })
    .select("-_id -__v")
    .lean<ProductType[]>();
};

export const getNewArrivals = async () => {
  return await Product.find({ manualBadges: "new" })
    .sort({ createdAt: -1 })
    .select("-_id -__v")
    .lean<ProductType[]>();
};
