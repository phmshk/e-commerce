import { PostType } from "./types";

export const categoryLabels: Record<PostType["category"], string> = {
  guide: "Guide",
  review: "Review",
  news: "News",
  "smart-home": "Smart Home",
  lifestyle: "Lifestyle",
};

export const MAX_POSTS_IN_GRID_MAIN = 4;
