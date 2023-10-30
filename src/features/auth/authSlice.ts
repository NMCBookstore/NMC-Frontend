import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login } from "../../interface/Login";
import { RootState } from "../../app/store";

const initialState: Partial<Login> = {
  status: "none",
  user: null,
  isFetching: false,
  error: false,
  access_token: null,
  refresh_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.status = "login";
    },
    signup: (state) => {
      state.status = "signup";
    },
    close: (state) => {
      state.status = "none";
    },

    loginStart: (state) => {
      state.isFetching = true;
    },
    setCredentials: (state, action: PayloadAction<Partial<Login>>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },

    logout: () => {
      window.localStorage.clear();
      alert("You're logged out");
    },
  },
});
export const { setCredentials, loginStart, logout, login, signup, close } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth?.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.auth?.access_token;
