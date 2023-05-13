import { book } from "./baseAPI";

const search = book.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (
        {page_id,
        page_size,
        text,
        genres,
        sub_genres,
        min_price,
        max_price,
        rating}
      ) => ({
        url: `searchs?page_id=${page_id}&page_size=${page_size}${text ? '&text='+text:''}${genres ? '&genres=' + genres:''}${sub_genres ? '&sub_genres' + sub_genres:''}${min_price ? '&min_price=' + min_price:''}&max_price=${max_price}${rating ? '&rating=' + rating:''}`,
        // url: `searchs?page_id=${page_id}&page_size=${page_size}&text=${text}&genres=${genres}&sub_genres=${sub_genres}&min_price=${min_price}&max_price=${max_price}&rating=${rating}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchQuery } = search;
