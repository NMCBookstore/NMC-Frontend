import { Order } from "../../interface/Order";
import { book } from "../Base/baseAPI";

const order = book.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, Partial<Order>>({
      query: (order) => ({
        url: `users/orders`,
        method: "POST",
        body: order,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = order;
