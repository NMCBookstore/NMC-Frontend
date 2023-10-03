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
      query: (idsArr) => {
        let endPoint = `users/addresses?`;
        idsArr.forEach((id) => (endPoint += `ids=${id}&`));

        return {
          method: "DELETE",
          url: endPoint,
        };
      },
      invalidatesTags: ["AddressItems"],
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
