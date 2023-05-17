import { book } from "./baseAPI";

const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        method: "POST",
        url: `login`,
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: `signup`,
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useSignupMutation } = auth;
