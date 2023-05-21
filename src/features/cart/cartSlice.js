import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    order: {
      item: [],
    },
    checkOutInfo: {
      checkout: [],
    },
  },

  reducers: {
    //this is use to store and clear the cart_id array
    setCartIdArr: (state, action) => {
      state.order.item = action.payload;
    },
    clearCartIdArr: (state, action) => {
      state.order.item = [];
    },

    // this is use to store and clear the book info array along with the cart_id
    setCheckOutInfoArr: (state, action) => {
      state.checkOutInfo.checkout = action.payload;
      toast.success("Your order is set");
    },
    clearCheckOutInfoArr: (state, action) => {
      state.checkOutInfo.checkout = [];
    },
  },
});

export const { setCartIdArr, setCheckOutInfoArr, clearCheckOutInfoArr, clearCartIdArr } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentProductArr = (state) =>
  state.cart.checkOutInfo?.checkout;
export const selectCurrentCartOrder = (state) => state.cart.order?.item;
