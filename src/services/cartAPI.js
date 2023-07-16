import { book } from "./baseAPI";

const cart = book.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: ({ id, amount }) => {
        return {
          method: "POST",
          url: `users/carts/${id}`,
          body: { amount },
        };
      },
      invalidatesTags: ["CartItems"],
    }),
    getCart: builder.query({
      query: () => ({
        method: "GET",
        url: "users/carts/",
      }),
      providesTags: ["CartItems"],
    }),
    deleteProductCart: builder.mutation({
      query: (idsArr) => {
        let endPoint = `users/carts?`;
        idsArr.forEach((id) => (endPoint += `ids=${id}&`));

        return {
          method: "DELETE",
          url: endPoint,
        };
      },
      invalidatesTags: ["CartItems"],
    }),
    updateCart: builder.mutation({
      query: ({ id, amount }) => {
        return {
          method: "PUT",
          url: `users/carts/${id}`,
          body: { amount },
        };
      },
      invalidatesTags: ["CartItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddCartMutation,
  useGetCartQuery,
  useDeleteProductCartMutation,
  useUpdateCartMutation,
} = cart;
