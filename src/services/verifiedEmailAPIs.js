import { book } from "./baseAPI";

const verifiedEmail = book.injectEndpoints({
  endpoints: (builder) => ({
    verifiedEmail: builder.query({
      query: ({email_id, secret_code}) => ({
        method: "GET",
        url: `verify_email?email_id=${email_id}&secret_code=${secret_code}`,
      }),
      providesTags: ["AddressItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
    useVerifiedEmailQuery
} = verifiedEmail;
