export interface Order {
  payment_id: any;
  cart_ids: number[];
  to_address: string;
  total_shipping: number;
  sub_total: number;
  status: string;
}
