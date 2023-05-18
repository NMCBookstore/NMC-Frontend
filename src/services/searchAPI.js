import { book } from "./baseAPI";

const search = book.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({
        page_id,
        page_size,
        text,
        genres_id,
        subgenres_id,
        min_price,
        max_price,
        rating
      }) => `searchs?page_id=${page_id}&page_size=${page_size}${text ? '&text='+text:''}${genres_id ? '&genres_id=' + genres_id:''}${subgenres_id ? '&subgenres_id=' + subgenres_id:''}${min_price ? '&min_price=' + min_price:''}&max_price=${max_price}${rating ? '&rating=' + rating:''}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchQuery } = search;
