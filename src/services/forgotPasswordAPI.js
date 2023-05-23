import { book } from "./baseAPI";

const forgotPassword = book.injectEndpoints({
  endpoints: (builder) => ({
    sendEmailForgotPassword: builder.mutation({
      query: (email) => {
        return {
          method: "POST",
          url: `forgot_password`,
          method: "POST",
          body: email,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendEmailForgotPasswordMutation } = forgotPassword;
