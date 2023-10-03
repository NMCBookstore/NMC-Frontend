import { book } from "./baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `books/${id}`,
    }),
    providesTags: ["books"],

    getAllProduct: builder.query({
      query: ({ page_id, page_size }) =>
        `books/?page_id=${page_id}&page_size=${page_size}`,
    }),
    providesTags: ["books"],

    getTopNewProduct: builder.query({
      query: () => `books/newest`,
    }),
    getTopBestProduct: builder.query({
      query: () => `books/the_best`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductQuery,
  useGetAllProductQuery,
  useGetTopNewProductQuery,
  useGetTopBestProductQuery,
} = product;
