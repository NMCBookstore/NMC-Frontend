import { book } from "./baseAPI";

const subGenres = book.injectEndpoints({
  endpoints: (builder) => ({
    getSubGenres: builder.query({
      query: (genre_id) => `subgenres/${genre_id}`,
    }),
    getOneSubGenres: builder.query({
      query: (id) => `subgenres/one/${id}`,
    }),
    getSubGenresNoticeable: builder.query({
      query: () => "subgenres/noticeable",
    }),
  }),
  overrideExisting: false,
});

export const { useGetSubGenresQuery, useGetSubGenresNoticeableQuery, useGetOneSubGenresQuery } =
  subGenres;
