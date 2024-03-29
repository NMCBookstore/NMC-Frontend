import { Product } from "./Product";
import { User } from "./User";

export interface Cart {
  cart_id: number;
  book_id: number;
  book_name: string;
  sale: number;
  author: string;
  amount: number;
  image: string;
  price: number;
}
