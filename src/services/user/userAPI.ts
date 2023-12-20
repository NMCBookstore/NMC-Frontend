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
    verifiedEmail : builder.query<User, {email_id: any, secret_code:any}>({
      query: ({email_id, secret_code}) => ({
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
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useVerifiedEmailQuery,
  useSendVerifyEmailMutation,
} = user;
