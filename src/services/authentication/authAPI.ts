import { setCredentials } from "../../features/auth/authSlice";
import { Login } from "../../interface/Login";
import { book } from "../Base/baseAPI";

export const getGoogleUrl = (from: any) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options = {
    redirect_uri: "http://localhost:8080/login/oauth/google",
    // redirect_uri: "http://localhost:3000",

    client_id:
      "322762283450-vd7agq6rmri1s0h06gi7ffg4aher31nm.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    // state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};

const auth = book.injectEndpoints({
  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation<
      Login,
      Pick<Login, "username" | "password">
    >({
      query: (credentials) => ({
        method: "POST",
        url: getGoogleUrl(credentials),
        body: { ...credentials },
      }),

      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   try {
      //     const { data } = await queryFulfilled;
      //     dispatch(setCredentials(data));
      //   } catch (error) {
      //     console.log("error to dispatch authentication");
      //   }
      // },
    }),
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

export const { useLoginWithGoogleMutation, useLoginMutation } = auth;
