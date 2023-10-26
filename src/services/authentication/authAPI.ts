import { Login } from "../../interface/Login";
import { book } from "../Base/baseAPI";


const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Login, Pick<Login,'username' | 'password' >>({
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
