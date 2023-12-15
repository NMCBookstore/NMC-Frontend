import { City, District } from "../../interface/Address";
import { book } from "../Base/baseAPI";

const district = book.injectEndpoints({
    endpoints: (builder) => ({
      getListDistrict: builder.query<District[], number | null>({
        query: (city_id) => ({
            method: "GET",
            url: `users/addresses/districts/${city_id}`,
          }),
      }),
    }),
    overrideExisting: false,
  });
  
  export const { useGetListDistrictQuery } = district;
