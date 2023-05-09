import { book } from "./baseAPI";

const search = book.injectEndpoints({
  endpoints: (builder) => ({
    createSearch: builder.mutation({
      query: (page_id, page_size, text, min_price, max_price, rating) => ({
        url: `searchs?page_id=${page_id}&page_size=${page_size}&text=${text}&min_price=${min_price}&max_price=${max_price}&rating=${rating}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useCreateSearchMutation} = search;
