import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.login.access_token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    // console.log(token);

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const refreshToken = api.getState().auth.login.refresh_token;

  if (result.error && result.error.status === 401) {
    const users = api.getState().auth.login.user.username;
    console.log("this is currentUser:  " + users)
    // const refreshToken = state.auth.refreshToken;
    console.log("this is refreshToken:  " + refreshToken)

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
    console.log("refreshResult data : " + refreshResult);

    if (refreshResult?.data) {
      const refresh_token = localStorage.getItem("refresh_token");
      // console.log(user);

      //store the new token
      api.dispatch(setCredentials({...refreshResult.data, refresh_token}));
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