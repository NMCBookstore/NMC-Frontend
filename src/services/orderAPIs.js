import { book } from "./baseAPI";

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({ payment_id, cart_ids, to_address, total_shipping, status }) => {
        return {
          method: "POST",
          url: `users/orders`,
          body: { cart_ids, to_address, total_shipping, status, payment_id },
        };
      },
    }),
    getAllOrder: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `users/orders`,
        };
      },
    }),
    getAdminAllOrder: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `admin/orders/`,
        };
      },
    }),
    getOrdersPaid: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `users/orders/paid`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetMyOrderQuery,
  useGetAllOrderQuery,
  useGetOrdersPaidQuery,
  useGetAdminAllOrderQuery,
} = order;
