import { book } from "../Base/baseAPI";
import { Genres } from "../../types/Genres";

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => ({
        url: `genres/`,
      }),
    }),
    getGenresById: builder.query<Genres, number>({
      query: (id) => `genres/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetGenresQuery,
} = genres;
