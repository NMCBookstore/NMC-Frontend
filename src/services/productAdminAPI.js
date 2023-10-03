import { book } from "./baseAPI";

const productAdmin = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => ({
        url: `admin/books`,
      }),
      providesTags: ["books"],
    }),
    createNewBook: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: `admin/books/`,
        body: formData,
      }),
      invalidatesTags: ["books"],
    }),
    UpdateBook: builder.mutation({
      query: (formData) => ({
        method: "PUT",
        url: `admin/books/${formData.get("id")}`,
        body: formData,
      }),
      invalidatesTags: ["books"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllBookQuery,
  useCreateNewBookMutation,
  useUpdateBookMutation,
} = productAdmin;
