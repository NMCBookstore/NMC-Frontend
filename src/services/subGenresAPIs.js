import { book } from "./baseAPI";

const subGenres = book.injectEndpoints({
  endpoints: (builder) => ({
    createSubGenres: builder.mutation({
      query: ({ genres_id, name }) => ({
        url: `admin/subgenres/`,
        method: "POST",
        body: { genres_id, name },
      }),
      invalidatesTags: ["subgenres"],
    }),
    updateSubgenres: builder.mutation({
      query: ({id,genre_id, name}) => ({
        url: `admin/subgenres/${id}`,
        method: "PUT",
        body: { id,genre_id, name },
      }),
      invalidatesTags:["subgenres"]
    }),
    getSubGenres: builder.query({
      query: (genre_id) => `subgenres/${genre_id}`,
      providesTags:["subgenres"]
    }),
    listSubGenres: builder.query({
      query: () => `subgenres/`,
      providesTags:["subgenres"]
    }),
    getOneSubGenres: builder.query({
      query: (id) => `subgenres/one/${id}`,
      providesTags:["subgenres"]
    }),
    getSubGenresNoticeable: builder.query({
      query: () => "subgenres/noticeable",
      providesTags:["subgenres"]
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSubGenresMutation,
  useUpdateSubgenresMutation,
  useGetSubGenresQuery,
  useGetSubGenresNoticeableQuery,
  useGetOneSubGenresQuery,
  useListSubGenresQuery
} = subGenres;
