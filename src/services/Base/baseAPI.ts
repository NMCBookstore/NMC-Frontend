import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  // prepareHeaders: (headers, { getState }) => {

  //   if (token && tokenTime) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const book = createApi({
  reducerPath: "bookApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
