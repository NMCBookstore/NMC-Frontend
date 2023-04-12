import { book } from "./baseAPI";

const cart = book.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (id) => ({
        method: "POST",
        url: `users/carts/${id}`,
      }),
    }),
    getCart: builder.query({
      query: () => ({
        url: `users/carts`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAddCartMutation, useGetCartQuery } = cart;
