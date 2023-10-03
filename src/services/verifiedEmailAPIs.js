import { book } from "./baseAPI";

const verifiedEmail = book.injectEndpoints({
  endpoints: (builder) => ({
    verifiedEmail: builder.query({
      query: ({email_id, secret_code}) => ({
        method: "GET",
        url: `verify_email?email_id=${email_id}&secret_code=${secret_code}`,
      }),
    }),
    sendVerifiedEmail: builder.mutation({
      query: () => ({
        method: "POST",
        url: `users/send_verify_email`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
    useVerifiedEmailQuery,
    useSendVerifiedEmailMutation
} = verifiedEmail;
