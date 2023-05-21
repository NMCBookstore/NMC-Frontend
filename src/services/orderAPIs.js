import { book } from "./baseAPI";

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (cart_ids) => {
        return {
          method: "POST",
          url: `users/orders`,
          body: { cart_ids },
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
    getOrdersPaid: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `users/orders/paid`,
        };
      },
    }),
    createPayment: builder.mutation({
      query: (form) => {
        return {
          method: "POST",
          url: `users/payments`,
          body: form,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetMyOrderQuery,
  useCreatePaymentMutation,
  useGetAllOrderQuery,
  useGetOrdersPaidQuery,
} = order;
