import { Address } from "../../interface/Address";
import { book } from "../Base/baseAPI";

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
    updateAddress: builder.mutation<Address, {id: number, address: string, district_id: number, city_id: number}>({
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

export const {
  useCreateAddressMutation,
  useGetAddressDetailQuery,
  useGetListAddressQuery,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} = address;
