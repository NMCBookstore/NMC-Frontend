import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { book } from "../services/Base/baseAPI";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "../features/auth/authSlice";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

import showLoginReducer from '../slice/ShowLoginSlide';

const rootReducer = combineReducers({
  [book.reducerPath]: book.reducer,
  showLogin:showLoginReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(book.middleware),
  devTools: true,
});

export let persistor = persistStore(store);

// setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
