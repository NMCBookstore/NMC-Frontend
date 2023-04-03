import { book } from "./baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `books/${id}`,
    }),
    getAllProduct: builder.query({
      query: ({
        page_id,
        page_size,
      }) => `books?page_id=${page_id}&page_size=${page_size}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery, useGetAllProductQuery } = product;


