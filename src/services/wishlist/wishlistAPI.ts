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
        url: `users/wishlists/`,
      }),
      providesTags: ["WishlistItems"],

    }),
    deleteWishlist: builder.mutation<Wishlist, number[]>({
      query: (IDsArr) => {
        let endPoint = `users/wishlists/delete?ids=${IDsArr[0]}`;
        return {
          method: "DELETE",
          url: `users/wishlists/delete?ids=${IDsArr[0]}`,
        };
      },
      invalidatesTags: ["WishlistItems"],
    }),
  }),
  overrideExisting: false,
});

export const { useAddToWishlistMutation, useGetWishlistQuery, useDeleteWishlistMutation } = wishlist;
