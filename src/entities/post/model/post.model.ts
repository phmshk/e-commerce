import mongoose, { Schema } from "mongoose";
import { PostType, POST_CATEGORIES } from "./types";

export interface PostDocument extends PostType, Document {
  _id: mongoose.Types.ObjectId;
}

const PostSchema = new Schema<PostDocument>(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    previewText: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: POST_CATEGORIES,
    },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String },
    },
    publishedAt: { type: String, required: true },
    readingTime: { type: Number, required: true },
    tags: { type: [String], default: [] },
  },
  { timestamps: true },
);

PostSchema.index({ publishedAt: -1 });

export default mongoose.models.Post ||
  mongoose.model<PostDocument>("Post", PostSchema);
