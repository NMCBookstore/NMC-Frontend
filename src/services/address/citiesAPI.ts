import { City } from "../../interface/Address";
import { book } from "../Base/baseAPI";

const cities = book.injectEndpoints({
    endpoints: (builder) => ({
    //   getCity: builder.query({
    //     query: (id) => ({
    //       method: "GET",
    //       url: `users/addresses/cities/${id}`,
    //     }),
    //   }),
      getListCities: builder.query<City[], void>({
        query: () => ({
          method: "GET",
          url: `users/addresses/cities/`,
        }),
      }),
    }),
    overrideExisting: false,
  });
  
  export const { useGetListCitiesQuery } = cities;
