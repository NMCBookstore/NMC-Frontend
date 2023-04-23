import { book } from "./baseAPI";

const wishlist = book.injectEndpoints({
  endpoints: (builder) => ({
    addWishList: builder.mutation({
      query: (id) => ({
        method: "POST",
        url: `users/wishlists/${id}`,
      }),
    }),
    getWishList: builder.query({
      query: () => ({
        url: `users/wishlists`,
      }),
    }),
    deleteProductWishlist: builder.mutation({
      query: ({id}) => ({
        method: 'DELETE',
        url: `users/wishlists/${id}`,
        body: id,
      }),
    })
  }),
  overrideExisting: false,
});

export const { useAddWishListMutation, useGetWishListQuery, useDeleteProductWishlistMutation } = wishlist;
