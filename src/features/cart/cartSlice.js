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
      shipping: 0,
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
      if (action.payload.length < 5) {
        state.checkOutInfo.shipping = 30000;
      } else {
        state.checkOutInfo.shipping = 0;
      }
    },
    clearCheckOutInfoArr: (state, action) => {
      state.checkOutInfo.checkout = [];
      state.checkOutInfo.shipping = 0;
    },
  },
});

export const {
  setCartIdArr,
  setCheckOutInfoArr,
  clearCheckOutInfoArr,
  clearCartIdArr,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentProductArr = (state) =>
  state.cart.checkOutInfo?.checkout;
export const selectCurrentCartOrder = (state) => state.cart.order?.item;
export const selectCurrentShipping = (state) =>
  state.cart.checkOutInfo.shipping;
export const selectCurrentAddress = (state) => state.cart.orderAddress?.address;
