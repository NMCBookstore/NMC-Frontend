import { url } from "inspector";
import { Address, Ward, WardReponse } from "../../interface/Address";
import { book, shipping } from "../Base/baseAPI";

const address = book.injectEndpoints({
  endpoints: (builder) => ({
    createAddress: builder.mutation<
      Address,
      { address: string; city_id: number | null; district_id: number | null }
    >({
      query: ({ address, district_id, city_id }) => {
        return {
          method: "POST",
          url: `users/addresses/`,
          body: { address, district_id, city_id },
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
    getAddressDetail: builder.query<Address, number>({
      query: (id) => ({
        url: `users/addresses/${id}`,
      }),
      providesTags: ["AddressItems"],
    }),
    getListAddress: builder.query<Address[], void>({
      query: () => ({
        method: "GET",
        url: `users/addresses/`,
      }),
      providesTags: ["AddressItems"],
    }),
    updateAddress: builder.mutation<
      Address,
      { id: number; address: string; district_id: number; city_id: number }
    >({
      query: ({ id, address, district_id, city_id }) => {
        return {
          method: "PUT",
          url: `users/addresses/${id}`,
          body: { id, address, district_id, city_id },
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
    deleteAddress: builder.mutation<Address, number[]>({
      query: (IDsArr) => {
        return {
          method: "DELETE",
          url: `users/addresses/delete?ids=${IDsArr[0]}`,
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
  }),
  overrideExisting: false,
});

const addressGHN = shipping.injectEndpoints({
  endpoints: (builder) => ({
    getListWard: builder.query<WardReponse, number>({
      query: (district_id) => ({
        url: `master-data/ward?district_id=${district_id}`,
      }),
      providesTags: ["Shipping"],
    }),

    addShippingFee: builder.query({
      query: ({ to_district_id, to_ward_code }) => ({
        url: `v2/shipping-order/fee?service_id=53320&to_district_id=${to_district_id}&to_ward_code=${to_ward_code}&height=5&length=22&weight=700&width=15`,
      }),
      providesTags: ["Shipping"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAddressMutation,
  useGetAddressDetailQuery,
  useGetListAddressQuery,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} = address;

export const { useGetListWardQuery, useAddShippingFeeQuery } = addressGHN;
