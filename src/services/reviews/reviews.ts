import { Review } from 'src/models/Review';
import { book } from '../base/baseAPI';
import { number } from 'prop-types';

const review = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query<Review[], void>({
      query: () => ({
        url: '/admin/reviews/all_reviews'
      }),
      providesTags: ['reviews']
    }),
    deleteReview: builder.mutation<Review, { id: number }>({
      query: ({ id }) => ({
        method: 'PUT',
        url: `/admin/reviews/delete.${id}`
      }),
      invalidatesTags: ['reviews']
    })
  }),
  overrideExisting: false
});

export const { useGetAllReviewQuery, useDeleteReviewMutation } = review;
