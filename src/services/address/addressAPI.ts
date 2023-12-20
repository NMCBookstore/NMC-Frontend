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
        method: "GET",
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
    updateAddress: builder.mutation({
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
        let endPoint = `users/addresses?`;
        IDsArr.map((id: any) => (endPoint += `ids=${id}`));
        return {
          method: "DELETE",
          url: endPoint,
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
