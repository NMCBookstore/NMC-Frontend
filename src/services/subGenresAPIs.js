import { book } from "./baseAPI";

const subGenres = book.injectEndpoints({
  endpoints: (builder) => ({
    getSubGenres: builder.query({
      query: (genre_id) => `subgenres/${genre_id}`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetSubGenresQuery} = subGenres;
