import { OrderType } from "@/src/entities/order";

export interface UserType {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "customer" | "admin";
  orders: OrderType[];
  wishlist: string[]; // array of product IDs
}
