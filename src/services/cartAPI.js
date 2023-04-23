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
    deleteProductCart: builder.mutation({
      query: ({id}) => ({
        method: 'DELETE',
        url: `users/carts/${id}`,
        body: id,
      }),
    })
  }),
  overrideExisting: false,
});

export const { useAddCartMutation, useGetCartQuery, useDeleteProductCartMutation } = cart;
