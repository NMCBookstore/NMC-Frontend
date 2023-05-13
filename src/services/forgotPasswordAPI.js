import { book } from "./baseAPI";

const forgotPassword = book.injectEndpoints({
  endpoints: (builder) => ({
    sendEmailForgotPassword: builder.query({
      query: (email) => {
        console.log(email);
        return {
          url: `forgot_password`,
          body: email,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendEmailForgotPasswordQuery } = forgotPassword;
