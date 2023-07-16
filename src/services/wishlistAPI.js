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
        url: `users/wishlists/`,
      }),
      providesTags: ["WishlistItems"],
    }),
    deleteProductWishlist: builder.mutation({
      query: (IDsArr) => {
        let endPoint = `users/wishlists?`;
        IDsArr.forEach((id) => (endPoint += `ids=${id}&`));

        return {
          method: "DELETE",
          url: endPoint,
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
