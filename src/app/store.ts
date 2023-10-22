import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { book } from "../services/Base/baseAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

import showLoginReducer from '../slice/ShowLoginSlide';

const rootReducer = combineReducers({
  [book.reducerPath]: book.reducer,
  showLogin:showLoginReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(book.middleware),
  devTools: true,
});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
