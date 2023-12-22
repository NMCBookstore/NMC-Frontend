import { Login } from "src/models/Login";
import { book } from "../base/baseAPI";
import { setCredentials } from "src/features/auth/authSlice";

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
  
  export const {
    useLoginMutation,
  } = auth;
  