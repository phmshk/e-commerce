import { Post } from "..";
import { PostType } from "../model/types";

export const getLatestPosts = async () => {
  return await Post.find({})
    .sort({ publishedAt: -1 })
    .select("-_id -__v")
    .lean<PostType[]>();
};
