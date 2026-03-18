export const POST_CATEGORIES = [
  "guide",
  "review",
  "news",
  "smart-home",
  "lifestyle",
] as const;

export type PostCategoryType = (typeof POST_CATEGORIES)[number];

export interface PostAuthorType {
  name: string;
  role: string;
  avatar?: string;
}

export interface PostType {
  id: string;
  slug: string; // URL-friendly id e.g. 'how-to-setup-lumia-air'
  title: string;
  previewText: string; // 100-150 symbols
  content: string;
  coverImage: string;
  category: PostCategoryType;
  author: PostAuthorType;
  publishedAt: string; // ISO Date
  readingTime: number;
  tags: string[];
}
