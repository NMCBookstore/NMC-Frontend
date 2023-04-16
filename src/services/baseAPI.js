import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    // console.log(token)

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = api.getState().auth.login.refresh_token;
    // const refreshToken = state.auth.refreshToken;
    console.log(refreshToken)

    console.log("sending refresh token");
    //send the request token
    const refreshResult = await baseQuery(
      {
        url: "tokens/renew_access",
        method: "POST",
        body: {
          refresh_token: refreshToken,
        },
      },
      api,
      extraOptions
    );
    console.log(refreshResult);

    if (refreshResult.data) {
      const user = api.getState().auth.login.user.username;
      console.log(user);
      //store the new token
      api.dispatch(setCredentials({...refreshResult.data, user}));
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};


export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
