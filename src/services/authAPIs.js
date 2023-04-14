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
    refresh: builder.mutation({
      query: (form) => ({
        method: 'POST',
        url: `tokens/renew_access`,
        body: form
      })
    }),
    signup: builder.mutation({
      query: (form) => ({
        method: "POST",
        url: `signup`,
        body: form,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useSignupMutation, useRefreshMutation } = auth;
