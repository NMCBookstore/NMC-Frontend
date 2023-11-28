import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Cart } from "../../interface/Cart";
import { RootState } from "../../app/store";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [] as Cart[],
  },
  reducers: {
    setCartInfo: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setCartInfo } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentCartProduct = (state: RootState) => state.cart?.item;

export const selectCurrentTotalCartValue = createSelector(
    [selectCurrentCartProduct],
    (items) => {
      return items.reduce((total, item) => total + item.price * item.amount, 0);
    }
  );

