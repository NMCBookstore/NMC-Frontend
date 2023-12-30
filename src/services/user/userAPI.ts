import { url } from "inspector";
import { Rank, User } from "../../interface/User";
import { book } from "../Base/baseAPI";

const user = book.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: `users/`,
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
    getUserRank: builder.query<Rank, { email: string }>({
      query: ({ email }) => ({
        url: `/users/rank?Email=${email}`,
      }),
    }),
    verifiedEmail: builder.query<User, { email_id: any; secret_code: any }>({
      query: ({ email_id, secret_code }) => ({
        method: "GET",
        url: `verify_email?email_id=${email_id}&secret_code=${secret_code}`,
      }),
    }),
    sendVerifyEmail: builder.mutation<User, void>({
      query: () => ({
        method: "POST",
        url: `users/send_verify_email`,
      }),
    }),
    sendForgotPasswordEmail: builder.mutation<User, { email: string }>({
      query: (email) => {
        return {
          method: "POST",
          url: `forgot_password`,
          body: email,
        };
      },
    }),
    resetPassword: builder.mutation<
      User,
      { id: any; reset_code: any; password: any }
    >({
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

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useGetUserRankQuery,
  useVerifiedEmailQuery,
  useSendVerifyEmailMutation,
  useSendForgotPasswordEmailMutation,
  useResetPasswordMutation,
} = user;
