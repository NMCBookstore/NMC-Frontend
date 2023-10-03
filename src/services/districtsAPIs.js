import { book } from "./baseAPI";

const districts = book.injectEndpoints({
  endpoints: (builder) => ({
    listDistricts: builder.query({
      query: (city_id) => ({
        method: "GET",
        url: `users/addresses/districts/${city_id}`,
      }),
      providesTags: ["CitiesItems"],
    }),
  }),
  overrideExisting: false,
});

export const { useListDistrictsQuery } = districts;
