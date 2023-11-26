import { book } from "../Base/baseAPI";
import { Cart } from "../../interface/Cart";

const cart = book.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation<Cart, { amount: number; book_id: number }>({
      query: ({ book_id, amount }) => {
        console.log(amount);
        return {
          method: "POST",
          url: `users/carts/${book_id}`,
          body: {
            amount: amount,
          },
        };
      },
      invalidatesTags: ["CartItems"],
    }),
    getCart: builder.query<Cart[], void>({
      query: () => ({
        method: "GET",
        url: "users/carts/",
      }),
      providesTags: ["CartItems"],
    }),
    deleteCartItem: builder.mutation<Cart, number[]>({
      query: (IDsArr) => {
        let endPoint = `users/carts?`;
        IDsArr.map((id: any) => (endPoint += `ids=${id}`));
        return {
          method: "DELETE",
          url: endPoint,
        };
      },
      invalidatesTags: ["CartItems"],
    })
  }),
  overrideExisting: false,
});

export const { useAddToCartMutation, useGetCartQuery, useDeleteCartItemMutation } = cart;
