import { book } from "./baseAPI";

const productAdmin = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => ({
        url: `admin/books`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBookQuery } = productAdmin;
