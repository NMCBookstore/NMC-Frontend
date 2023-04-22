import { book } from "./baseAPI";

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
        query: () => ({
            url:  `genres`
        })
    }),

  }),
  overrideExisting: false,
});

export const { useGetGenresQuery } = genres;


