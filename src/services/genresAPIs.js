import { book } from "./baseAPI";

const genres = book.injectEndpoints({
  endpoints: (builder) => ({
    createGenres: builder.mutation({
      query: (name) => ({
        url: `admin/genres`,
        method: "POST",
        body: { name },
      }),
      invalidatesTags:["genres"]
    }),
    updateGenres: builder.mutation({
      query: ({id, name}) => ({
        url: `admin/genres/${id}`,
        method: "PUT",
        body: { id, name },
      }),
      invalidatesTags:["genres"]
    }),
    getGenres: builder.query({
      query: () => ({
        url: `genres`,
      }),
      providesTags:["genres"]
    }),
    getOneGenres: builder.query({
      query: (id) => ({
        url: `genres/${id}`,
      }),
      providesTags:["genres"]
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateGenresMutation,
  useUpdateGenresMutation,
  useGetGenresQuery,
  useGetOneGenresQuery,
} = genres;
