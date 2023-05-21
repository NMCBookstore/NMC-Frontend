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
    getMyOrder: builder.query({
      query: ({ page_id, page_size }) => {
        return {
          method: "GET",
          url: `users/orders?page_id=${page_id}&page_size=${page_size}`,
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
} = order;
