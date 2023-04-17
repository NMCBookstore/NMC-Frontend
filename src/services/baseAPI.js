import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
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
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const refreshToken = api.getState().auth.login.refresh_token;

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      console.log("sending refresh token");
      //send the request token
      try {
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
        if (refreshResult?.data) {
          const refresh_token = localStorage.getItem("refresh_token");

          //store the new token
          api.dispatch(
            setCredentials({ ...refreshResult.data, refresh_token })
          );
          //retry the original query with new access token
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
