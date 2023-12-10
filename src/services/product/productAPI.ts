import { AllProduct, Product } from "../../interface/Product";
import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails : builder.query<Product, number>({
      query: (id) => `books/${id}`,
    }),

    getAllProducts : builder.query<AllProduct,{page_id: number, page_size: number}>({
      query: ({page_id, page_size}) => 
      `books/?page_id=${page_id}&page_size=${page_size}`,
    }), 

    getTopNewProduct: builder.query<Product[], void>({
      query: () => `books/newest`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductDetailsQuery, useGetTopNewProductQuery, useGetAllProductsQuery } = product;
