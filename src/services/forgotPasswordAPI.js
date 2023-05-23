import { book } from "./baseAPI";

const forgotPassword = book.injectEndpoints({
  endpoints: (builder) => ({
    sendEmailForgotPassword: builder.mutation({
      query: (email) => {
        console.log(email);
        return {
          method: "POST",
          url: `forgot_password`,
          body: email,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendEmailForgotPasswordQuery } = forgotPassword;
