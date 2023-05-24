import { book } from "./baseAPI";

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
        query: () => ({
            url:  `genres`
        })
    }),
    getOneGenres: builder.query({
      query: (id) => ({
          url:  `genres/${id}`
      })
  }),
  }),
  overrideExisting: false,
});

export const { useGetGenresQuery, useGetOneGenresQuery} = genres;


