import { book } from "./baseAPI";

const address = book.injectEndpoints({
  endpoints: (builder) => ({
    createAddress: builder.mutation({
      query: ({ address, district_id, city_id }) => {
        return {
          method: "POST",
          url: `users/addresses/`,
          body: { address, district_id, city_id },
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
    getAddress: builder.query({
      query: (id) => ({
        method: "GET",
        url: `users/addresses/${id}`,
      }),
      providesTags: ["AddressItems"],
    }),
    listAddress: builder.query({
      query: () => ({
        method: "GET",
        url: `users/addresses/`,
      }),
      providesTags: ["AddressItems"],
    }),
    deleteAddress: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `users/Addresss/${id}`,
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
    updateAddress: builder.mutation({
      query: ({ id, address, district, city }) => {
        return {
          method: "PUT",
          url: `users/Addresss/${id}`,
          body: { address, district, city },
        };
      },
      invalidatesTags: ["AddressItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAddressMutation,
  useGetAddressQuery,
  useListAddressQuery,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} = address;
