import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Cart } from "../../interface/Cart";
import { RootState } from "../../app/store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [] as Cart[],
    note: "",
    address: "",
    shipping: 0,
  },
  reducers: {
    setCartInfo: (state, action) => {
      state.item = action.payload;
    },
    setShipping: (state, action) => {
      state.shipping = action.payload;
    },

    setNoteInfo: (state, action) => {
      state.note = action.payload;
    },
    clearNoteAndAddressInfo: (state) => {
      state.note = "";
      state.address = "";
      state.shipping = 0;
    },

    setAddressInfo: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  setCartInfo,
  setNoteInfo,
  setAddressInfo,
  setShipping,
  clearNoteAndAddressInfo,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentCartProduct = (state: RootState) => state.cart?.item;
export const selectCurrentCardID = (state: RootState) =>
  state?.cart.item.map((item) => item.cart_id);
export const selectCurrentUserNote = (state: RootState) => state?.cart?.note;
export const selectCurrentUserAddress = (state: RootState) =>
  state?.cart?.address;
export const selectCurrentShipping = (state: RootState) =>
  state?.cart.shipping / 23000;
export const selectCurrentTotalCartValue = createSelector(
  [selectCurrentCartProduct],
  (items) => {
    return items.reduce((total, item) => {
      if (item.sale === 0) {
        return total + item.price * item.amount;
      } else if (item.sale !== 0) {
        return (
          total +
          Number(item?.price) * (1 - Number(item?.sale) / 100) * item?.amount
        );
      }
      return total;
    }, 0);
  }
);
