import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import prodDetailSlice from "../features/prodDetailSlice";
import { book } from "../services/baseAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(book.middleware),
  devTools: true,

  reducer: {
    [book.reducerPath]: book.reducer,
    auth: authReducer,
    // prod: prodDetailSlice,
  },
});

setupListeners(store.dispatch);

export default store;
