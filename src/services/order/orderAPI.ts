import { Order } from "../../interface/Order";
import { book } from "../Base/baseAPI";

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, Partial<Order>>({
      query: (order) => ({
        url: `users/orders/create`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["CartItems"],
    }),
    getAllOrder: builder.query<Order[], void>({
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

export const { useCreateOrderMutation, useGetAllOrderQuery } = order;
