import { book } from '../base/baseAPI';
import { Genres } from 'src/models/Genres';

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    createGenres: builder.mutation<Genres, string>({
      query: (name) => ({
        url: `admin/genres`,
        method: 'POST',
        body: { name }
      }),
      invalidatesTags: ['genres']
    }),
    getGenres: builder.query<Genres[], void>({
      query: () => ({
        url: `genres/`
      }),
      providesTags: ['genres']
    }),
    getGenresById: builder.query<Genres, number>({
      query: (id) => `genres/${id}`
    }),
    updateGenres: builder.mutation<Genres, { id: number; name: string }>({
      query: ({ id, name }) => ({
        url: `admin/genres/${id}`,
        method: 'PUT',
        body: { id, name }
      }),
      invalidatesTags: ['genres']
    }),
    softDeleteGenres: builder.mutation<Genres, number>({
      query: (id) => ({
        method: 'DELETE',
        url: `/admin/genres/soft/${id}`
      }),
      invalidatesTags: ['genres']
    })
  }),
  overrideExisting: false
});

export const {
  useGetGenresQuery,
  useCreateGenresMutation,
  useUpdateGenresMutation,
  useSoftDeleteGenresMutation
} = genres;
