import { setCredentials } from "../../features/auth/authSlice";
import { Login } from "../../interface/Login";
import { book } from "../Base/baseAPI";

const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Login, Pick<Login, "username" | "password">>({
      query: (credentials) => ({
        method: "POST",
        url: `/login`,
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          console.log("error to dispatch authentication");
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = auth;
