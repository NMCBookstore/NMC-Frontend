import { book } from "./baseAPI";

const cart = book.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: ({ id, amount }) => {
        console.log(id, amount);
        return {
          method: "POST",
          url: `users/carts/${id}`,
          body: { amount },
        };
      },
    }),
    getCart: builder.query({
      query: () => ({
        method: "GET",
        url: "users/carts",
      }),
      providesTags: ["CartItems"],
    }),
    deleteProductCart: builder.mutation({
      query: ({ id }) => ({
        method: "DELETE",
        url: `users/carts/${id}`,
        body: id,
      }),
      invalidatesTags: ["CartItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddCartMutation,
  useGetCartQuery,
  useDeleteProductCartMutation,
} = cart;
