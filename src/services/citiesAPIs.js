import { book } from "./baseAPI";

const cities = book.injectEndpoints({
  endpoints: (builder) => ({
    getCity: builder.query({
      query: (id) => ({
        method: "GET",
        url: `users/addresses/cities/${id}`,
      }),
      providesTags: ["CitiesItems"],
    }),
    listCities: builder.query({
      query: () => ({
        method: "GET",
        url: `users/addresses/cities/`,
      }),
      providesTags: ["CitiesItems"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCityQuery, useListCitiesQuery } = cities;
