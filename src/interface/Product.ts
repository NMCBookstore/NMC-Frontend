import { Genres } from "./Genres";
import { Subgenres } from "./Subgenres";

export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  image: string[];
  description: string;
  author?: string;
  publisher?: string;
  quantity?: number;
  rating: number;
  genres?: Genres;
  subgenres?: Subgenres;
}

export interface AllProduct {
  total_page: number;
  books: Product[];
}
