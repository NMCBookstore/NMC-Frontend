import { book } from "../Base/baseAPI";

const product = book.injectEndpoints({
  endpoints: (builder) => ({

    getTopNewProduct: builder.query({
      query: () => `books/newest`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTopNewProductQuery,
} = product;
