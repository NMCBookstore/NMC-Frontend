import { book } from "../Base/baseAPI";
import { Genres } from "../../interface/Genres";

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genres[], void>({
      query: () => ({
        url: `genres/`,
      }),
      transformResponse: (response: Genres[]) => {
        const genresNotDeleted = response.filter((item) => !item.is_deleted);
        return genresNotDeleted;
      },
    }),
    getGenresById: builder.query<Genres, number>({
      query: (id) => `genres/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetGenresQuery } = genres;
