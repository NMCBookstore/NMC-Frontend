import { Product } from "./Product";

export interface Transaction {
  amount: number;
  books_id: Product["id"];
  id: number;
  orders_id: number;
  reviewed: boolean;
  total: number;
  created_at: string;
}

export interface Order {
  id: number;
  payment_id: any;
  cart_ids: number[];
  to_address: string;
  total_shipping: number;
  email: string;
  note: string;
  sub_total: number;
  status: string;
  books: Product[];
  transactions: Transaction[];
  sub_amount: number;
}
