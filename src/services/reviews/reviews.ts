import { Review } from 'src/models/Review';
import { book } from '../base/baseAPI';

const review = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query<Review[], void>({
      query: () => ({
        url: '/admin/reviews/all_reviews'
      })
    })
  }),
  overrideExisting: false
});

export const { useGetAllReviewQuery } = review;
