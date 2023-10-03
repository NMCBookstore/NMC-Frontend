import { book } from "./baseAPI";

const review = book.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: ({ book_id, comments, rating }) => ({
        method: "POST",
        url: `users/reviews/${book_id}`,
        body: { book_id, comments, rating },
      }),
      invalidatesTags: ["ReviewItem"],
    }),
    getReview: builder.query({
      query: ({ book_id, page_id, page_size }) => ({
        url: `reviews/${book_id}?page_id=${page_id}&page_size=${page_size}`,
      }),
      providesTags: ["ReviewItem"],
    }),
    deleteProductWishlist: builder.mutation({
      query: ({ ids }) => ({
        method: "DELETE",
        url: `users/wishlists?ids=${ids}`,
        body: ids,
      }),
      invalidatesTags: ["WishlistItems"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetReviewQuery, useAddReviewMutation } = review;
