import { PaginationParams } from "@/src/shared/lib/db/types";
import { Post, PostDocument } from "..";
import { PostType } from "../model/types";
import { getPaginatedData } from "@/src/shared/lib/db/dbService";

export const PostApi = {
  async getLatestPosts(params: PaginationParams<PostType>) {
    return getPaginatedData<PostType, PostDocument>(Post, {
      ...params,
      sort: { publishedAt: -1 },
    });
  },
};
