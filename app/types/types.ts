import { StaticImageData } from "next/image";

export interface HeroSlide {
  id: string | number;
  title: string;
  description: string;
  cta: string;
  href: string;
  align: "left" | "center" | "right";
  image: StaticImageData;
}

export interface ProductCard {
  id: string;
  img: string | StaticImageData;
  title: string;
  description: string;
  basePrice: number;
  discountPercent: number;
  rating: number;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem extends Pick<ProductCard, "id" | "title" | "img"> {
  purchasePrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  createdAt: string; // ISO Date
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  shippingAddress?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string | StaticImageData;
  role: "customer" | "admin";
  orders: Order[];
  wishlist: string[]; // array of product IDs
}

export type PostCategory =
  | "guide"
  | "review"
  | "news"
  | "smart-home"
  | "lifestyle";

export interface Post {
  id: string;
  slug: string; // URL-friendly id e.g. 'how-to-setup-lumia-air'
  title: string;
  previewText: string; // 100-150 symbols
  content: string;
  coverImage: string | StaticImageData;
  category: PostCategory;
  author: {
    name: string;
    role: string;
    avatar?: string | StaticImageData;
  };
  publishedAt: string; // ISO Date
  readingTime: number;
  tags: string[];
}
