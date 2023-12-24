import { Genres } from "./Genres";
import { Subgenres } from "./Subgenres";

export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  sale: number;
  image: string[];
  description: string;
  author?: string;
  publisher?: string;
  quantity?: number;
  rating: number;
  genres?: Genres;
  subgenres?: Subgenres;
  is_deleted: boolean;
}

export interface AllProduct {
  total_page: number;
  page_id: number;
  page_size: number;
  text?: string;
  genres_id?: number;
  min_price?: number;
  max_price?: number;
  rating?: number;
  books: Product[];
}
