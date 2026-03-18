import type { ProductType } from "@/src/entities/product";

export type OrderStatusType =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItemType extends Pick<
  ProductType,
  "id" | "title" | "img"
> {
  purchasePrice: number;
  quantity: number;
}

export interface OrderType {
  id: string;
  createdAt: string; // ISO Date
  status: OrderStatusType;
  items: OrderItemType[];
  totalAmount: number;
  shippingAddress?: string;
}
