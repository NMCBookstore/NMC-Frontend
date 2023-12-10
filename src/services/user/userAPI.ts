import { User } from "../../interface/User";
import { book } from "../Base/baseAPI";

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: `users`,
      }),
    }),
    updateUser: builder.mutation<User, FormData>({
      query: (formData) => {
        return {
          method: "PUT",
          url: `users/`,
          body: formData,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateUserMutation } = user;
