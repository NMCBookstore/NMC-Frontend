import { Product } from "../../interface/Product";
import { Review, ReviewResponse } from "../../interface/Reviews";
import { book } from "../Base/baseAPI";

const review = book.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query<ReviewResponse, {book_id: number, page_id: number, page_size: number}>({
      query: ({ book_id, page_id, page_size }) => ({
        url: `reviews/${book_id}?page_id=${page_id}&page_size=${page_size}`,
      }),
    })
  }),
  overrideExisting: false,
});

export const { useGetReviewQuery } = review;
