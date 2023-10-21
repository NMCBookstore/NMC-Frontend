import { Login } from "../../types/Login";
import { User } from "../../types/User";
import { book } from "../Base/baseAPI";


const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Login, Partial<Login>>({
      query: (credentials) => ({
        method: "POST",
        url: `login`,
        body: { ...credentials },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = auth;
