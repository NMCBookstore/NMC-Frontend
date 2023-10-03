import { book } from "./baseAPI";

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: `admin/orders`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllOrderQuery } = order;
