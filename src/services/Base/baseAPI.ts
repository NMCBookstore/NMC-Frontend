import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "../../app/store";
import { setCredentials } from "../../features/auth/authSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.access_token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const refresh_token = (api.getState() as RootState).auth.refresh_token;
  const user = (api.getState() as RootState).auth.user;
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
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
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(
        setCredentials({
          ...refreshResult.data,
          refresh_token,
          user,
        })
      );
      console.log(refreshResult.data);
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logout());
    }
  }
  return result;
};

export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  tagTypes: ["WishlistItems", "CartItems", "AddressItems"],
  endpoints: () => ({}),
});
