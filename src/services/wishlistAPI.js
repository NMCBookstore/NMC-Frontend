import { book } from "./baseAPI";

const wishlist = book.injectEndpoints({
  endpoints: (builder) => ({
    addWishList: builder.mutation({
      query: (id) => ({
        method: "POST",
        url: `users/wishlists/${id}`,
      }),
      invalidatesTags: ["WishlistItems"],
    }),
    getWishList: builder.query({
      query: () => ({
        url: `users/wishlists`,
      }),
      providesTags: ["WishlistItems"],
    }),
    deleteProductWishlist: builder.mutation({
      query: ({ ids }) => {
        console.log(ids);
        return {
          method: "DELETE",
          url: `users/wishlists?ids=${ids}`,
          body: ids,
        };
      },
      invalidatesTags: ["WishlistItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddWishListMutation,
  useGetWishListQuery,
  useDeleteProductWishlistMutation,
} = wishlist;
