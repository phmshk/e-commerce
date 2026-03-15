export const POST_CATEGORIES = [
  "guide",
  "review",
  "news",
  "smart-home",
  "lifestyle",
] as const;
export type PostCategory = (typeof POST_CATEGORIES)[number];

export interface PostAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface Post {
  id: string;
  slug: string; // URL-friendly id e.g. 'how-to-setup-lumia-air'
  title: string;
  previewText: string; // 100-150 symbols
  content: string;
  coverImage: string;
  category: PostCategory;
  author: PostAuthor;
  publishedAt: string; // ISO Date
  readingTime: number;
  tags: string[];
}
