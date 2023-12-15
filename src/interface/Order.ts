import { Product } from "./Product";

export interface Order {
  id: number;
  payment_id: any;
  cart_ids: number[];
  to_address: string;
  total_shipping: number;
  sub_total: number;
  status: string;
  books: Product[];
  // transaction:
  sub_amount: number;
}
