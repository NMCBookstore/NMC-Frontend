import { setCredentials } from "../../features/auth/authSlice";
import { Login } from "../../interface/Login";
import { book } from "../Base/baseAPI";
console.log("here");

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
    loginWithGoogle: builder.query({
      query: (codeResponse) => ({
        url: `https://nmc-bookstore-api.onrender.com/login/oauth/google?code=${codeResponse.code}`,
      }),
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
    signUp: builder.mutation<Login, FormData>({
      query: (formData) => ({
        method: "POST",
        url: `signup`,
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});
export const {
  useLoginWithGoogleQuery,
  useLoginMutation,
  useSignUpMutation,
} = auth;
