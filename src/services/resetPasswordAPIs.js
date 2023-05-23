import { book } from "./baseAPI";

const resetPassword = book.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: ({ id, reset_code, password }) => {
        return {
          url: `reset_password`,
          method: "PUT",
          body: { id, reset_code, password },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useResetPasswordMutation } = resetPassword;
