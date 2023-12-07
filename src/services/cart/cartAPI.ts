import { book } from "../Base/baseAPI";
import { Cart } from "../../interface/Cart";
import { setCartInfo } from "../../features/cart/cartSlice";

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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCartInfo(data));
        } catch (error) {
          console.log("error to dispatch cart info");
        }
      },
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
    }),
    updateCart: builder.mutation<Cart, { cart_id: number; amount: number }>({
      query: ({ cart_id, amount }) => {
        return {
          method: "PUT",
          url: `users/carts/${cart_id}`,
          body: {
            amount: amount,
          },
        };
      },
      invalidatesTags: ["CartItems"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useDeleteCartItemMutation,
  useUpdateCartMutation,
} = cart;
