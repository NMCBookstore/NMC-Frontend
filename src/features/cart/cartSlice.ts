import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Cart } from "../../interface/Cart";
import { RootState } from "../../app/store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [] as Cart[],
    note: "",
    address: "",
  },
  reducers: {
    setCartInfo: (state, action) => {
      state.item = action.payload;
    },

    setNoteInfo: (state, action) => {
      state.note = action.payload;
    },
    clearNoteAndAddressInfo: (state) => {
      state.note = "";
      state.address = "";
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
  clearNoteAndAddressInfo,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentCartProduct = (state: RootState) => state.cart?.item;
export const selectCurrentCardID = (state: RootState) =>
  state?.cart.item.map((item) => item.cart_id);
export const selectCurrentUserNote = (state: RootState) => state?.cart?.note;
export const selectCurrentUserAddress = (state: RootState) =>
  state?.cart?.address;

export const selectCurrentTotalCartValue = createSelector(
  [selectCurrentCartProduct],
  (items) => {
    return items.reduce((total, item) => total + item.price * item.amount, 0);
  }
);
