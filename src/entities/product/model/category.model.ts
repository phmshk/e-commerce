import mongoose, { Schema, Document } from "mongoose";
import type { CategoryType } from "./types";

export interface CategoryDocument extends CategoryType, Document {
  _id: mongoose.Types.ObjectId;
}

const CategorySchema = new Schema<CategoryDocument>({
  category_id: { type: String, required: true, unique: true },
  order: { type: Number, required: true },
  title: { type: String, required: true },
  layout: { type: String, required: true },
});

export default mongoose.models.Category ||
  mongoose.model<CategoryDocument>("Category", CategorySchema);
