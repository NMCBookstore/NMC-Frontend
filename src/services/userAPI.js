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
        // console.log(info)
        return {
          method: "PUT",
          url: `users`,
          body: formData,
        };
      },
      invalidatesTags: ["UserInfo"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useUpdateUserMutation } = user;
