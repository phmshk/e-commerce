import mongoose, { Schema, Document } from "mongoose";
import { Product, PRODUCT_BADGE_TYPES } from "@/app/types";

export interface ProductDocument extends Product, Document {
  _id: mongoose.Types.ObjectId;
}

const ProductSchema = new Schema<ProductDocument>(
  {
    id: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    basePrice: { type: Number, required: true },
    discountPercent: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    categories: { type: [String], default: [] },
    stock: { type: Number, default: 0 },
    manualBadges: { type: [String], enum: PRODUCT_BADGE_TYPES, default: [] },
  },
  { timestamps: true },
);

ProductSchema.index({ discountPercent: -1 });

export default mongoose.models.Product ||
  mongoose.model<ProductDocument>("Product", ProductSchema);
