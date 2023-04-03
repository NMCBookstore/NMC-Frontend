import { book } from "./baseAPI";

const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation ({
        query: (form) => ({
            method: 'POST',
            url: 'login',
            body: form,
        })
    })
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = auth;


