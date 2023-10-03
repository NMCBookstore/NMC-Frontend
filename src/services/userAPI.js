import { book } from "./baseAPI";

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `users`,
      }),
      providesTags: ["UserInfo"],
    }),
    updateUser: builder.mutation({
      query: (formData) => {
        return {
          method: "PUT",
          url: `users/`,
          body: formData,
        };
      },
      invalidatesTags: ["UserInfo"],
    }),
    listUser: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `admin/users/`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useUpdateUserMutation, useListUserQuery } =
  user;
