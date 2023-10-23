import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query";
// import { logout, setCredentials } from "../../features/auth/authSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.access_token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     // try to get a new token
//     const refreshResult = await baseQuery(
//       {
//         url: "tokens/renew_access",
//         method: "POST",
//         body: {
//           refresh_token: refresh_token,
//         },
//       },
//       api,
//       extraOptions
//     );
//     if (refreshResult.data) {
//       // store the new token
//       api.dispatch(setCredentials(refreshResult.data));
//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
