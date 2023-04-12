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
  }),
  overrideExisting: false,
});

export const { useAddWishListMutation, useGetWishListQuery } = wishlist;
