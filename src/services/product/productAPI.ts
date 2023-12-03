import { Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails : builder.query<Product, number>({
      query: (id) => `books/${id}`,
    }),

    getTopNewProduct: builder.query<Product[], void>({
      query: () => `books/newest`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductDetailsQuery, useGetTopNewProductQuery } = product;
