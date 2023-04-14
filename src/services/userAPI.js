import { book } from "./baseAPI";

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `users`
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useGetUserQuery} = user;
