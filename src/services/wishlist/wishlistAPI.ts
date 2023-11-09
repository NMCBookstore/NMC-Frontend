import { Product } from "../../interface/Product";
import { Wishlist } from "../../interface/Wishlist";
import { book } from "../Base/baseAPI";

const wishlist = book.injectEndpoints({
  endpoints: (builder) => ({
    addToWishlist: builder.mutation<Wishlist, number>({
      query: (books_id) => ({
        method: "POST",
        url: `users/wishlists/${books_id}`,
      }),
      invalidatesTags: ["WishlistItems"],
    }),
    getWishlist: builder.query<Wishlist[], void>({
      query: () => ({
        url: `users/wishlists`,
      }),
      providesTags: ["WishlistItems"],

    }),
    
  }),
  overrideExisting: false,
});

export const { useAddToWishlistMutation, useGetWishlistQuery } = wishlist;
