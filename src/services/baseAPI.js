import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    //send the request token
    const refreshResult = await baseQuery(
      "/tokens/renew_access",
      api,
      extraOptions
    );
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
