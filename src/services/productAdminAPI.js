import { book } from "./baseAPI";

const productAdmin = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => ({
        url: `admin/books`,
      }),
    }),
    createNewBook: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: `admin/books/`,
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBookQuery, useCreateNewBookMutation } = productAdmin;
