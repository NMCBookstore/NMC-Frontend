import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../features/auth/authSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.login.access_token;
    const tokenTime = getState().auth.login.access_token_expires_at

    if (token && tokenTime) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    console.log("this is the access token: " + token);

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const refresh_token = api.getState().auth.login.refresh_token;
  const user = api.getState().auth.login.user;
  const session_id = api.getState().auth.login.session_id;
  const refresh_token_expires_at = api.getState().auth.login.refresh_token_expires_at;

  console.log("this is the refresh token: " + refresh_token)

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
              refresh_token: refresh_token,
            },
          },
          api,
          extraOptions
        );
        console.log("this is refresh result: ", refreshResult)
        if (refreshResult?.data) {
          //store the new token
          api.dispatch(
            setCredentials({...refreshResult.data, refresh_token, user, session_id,refresh_token_expires_at})
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