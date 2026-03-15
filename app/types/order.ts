import { Product } from "./product";

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem extends Pick<Product, "id" | "title" | "img"> {
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
