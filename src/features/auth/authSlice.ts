import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login } from "../../types/Login";

const initialState: Partial<Login> = {
  user: null,
  isFetching: false,
  error: false,
  access_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    setCredentials: (state, action: PayloadAction<Partial<Login>>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },

    logout: () => {
      window.localStorage.clear();
      alert("You're logged out")
    },
  },
});
export const { setCredentials, loginStart, logout } = authSlice.actions;

export default authSlice.reducer;
