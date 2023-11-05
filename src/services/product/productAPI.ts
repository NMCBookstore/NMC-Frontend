import { Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getTopNewProduct: builder.query<Product[], void>({
      query: () => `books/newest`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetTopNewProductQuery } = product;
