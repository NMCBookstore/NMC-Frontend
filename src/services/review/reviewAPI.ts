import { Product } from "../../interface/Product";
import { Review, ReviewResponse } from "../../interface/Reviews";
import { book } from "../Base/baseAPI";

const review = book.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation<
      Review,
      { book_id: number; comments: string; rating: number }
    >({
      query: ({ book_id, comments, rating }) => ({
        method: "POST",
        url: `users/reviews/${book_id}`,
        body: { book_id, comments, rating },
      }),
      invalidatesTags: ["ReviewItems"],
    }),

    getReview: builder.query<
      ReviewResponse,
      { book_id: number; username: string; page_id: number; page_size: number }
    >({
      query: ({ book_id, username, page_id, page_size }) => ({
        url: `reviews/${book_id}?username=${username}&page_id=${page_id}&page_size=${page_size}`,
      }),
      transformResponse: (response: ReviewResponse) => {
        const productNotDeleted = response?.reviews.filter(
          (item) => !item.is_deleted
        );
        return {
          ...response,
          reviews: productNotDeleted,
        };
      },
      providesTags: ["ReviewItems"],
    }),

    addLikeReview: builder.mutation<Review, { reviewID: number }>({
      query: ({ reviewID }) => ({
        method: "GET",
        url: `users/reviews/action/like?ReviewId=${reviewID}`,
      }),
      invalidatesTags: ["ReviewItems"],
    }),

    addDislikeReview: builder.mutation<Review, { reviewID: number }>({
      query: ({ reviewID }) => ({
        method: "GET",
        url: `users/reviews/action/dislike?ReviewId=${reviewID}`,
      }),
      invalidatesTags: ["ReviewItems"],
    }),

    addReportReview: builder.mutation<Review, number>({
      query: (reviewID) => ({
        method: "POST",
        url: `users/reviews/action/report/${reviewID}`,
      }),
      invalidatesTags: ["ReviewItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetReviewQuery,
  useAddLikeReviewMutation,
  useAddReviewMutation,
  useAddReportReviewMutation,
  useAddDislikeReviewMutation,
} = review;
