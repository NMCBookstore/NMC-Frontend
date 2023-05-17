import { book } from "./baseAPI";

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `users`,
      }),
      providesTags: ['UserInfo'],
    }),
    updateUser: builder.mutation({
      query: (info) => {
        // console.log(info)
        return {
          method: "PUT",
          url: `users`,
          body: info,
        };
      },
      invalidatesTags: ['UserInfo'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useUpdateUserMutation } = user;
