import { book } from "./baseAPI";

const cart = book.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
        query: (id) => ({
            method: 'POST',
            url: `users/add_to_cart/${id}`,
        })
    }),
    getCart: builder.query({
      query: () =>({
          url: `users/list_book_in_cart`,
      })
    })
  }),
  overrideExisting: false,
});

export const { useAddCartMutation, useGetCartQuery } = cart;


