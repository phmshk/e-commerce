import { Order } from "./order";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "customer" | "admin";
  orders: Order[];
  wishlist: string[]; // array of product IDs
}
