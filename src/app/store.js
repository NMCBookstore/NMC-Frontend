import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import prodDetailSlice from "../features/prodDetailSlice";
import { book } from "../services/baseAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(book.middleware),

  reducer: {
    [book.reducerPath]: book.reducer,
    user: authSlice,
    prod: prodDetailSlice,
  },
});

setupListeners(store.dispatch);

export default store;
