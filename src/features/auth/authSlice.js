import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      session_id: null,
      user: null,
      access_token: null,
      refresh_token: null,
      access_token_expires_at: null,
      refresh_token_expires_at: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    setCredentials: (state, action) => {
      state.login.isFetching = false;
      state.login.user = action.payload.user;
      state.login.error = false;
      if (
        action.payload?.session_id &&
        action.payload?.access_token &&
        action.payload?.refresh_token &&
        action.payload?.access_token_expires_at &&
        action.payload?.refresh_token_expires_at
      ) {
        state.login.session_id = action.payload.session_id;
        state.login.access_token = action.payload.access_token;
        state.login.refresh_token = action.payload.refresh_token;
        state.login.access_token_expires_at =
          action.payload.access_token_expires_at;
        state.login.refresh_token_expires_at =
          action.payload.refresh_token_expires_at;
      }
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
    },



    logout: () => {
      window.localStorage.clear();
      toast.success("You're logged out");
    },
  },
});

export const {
  setCredentials,
  loginFailed,
  loginStart,
  logout,
  refresh,
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.login?.user;
export const selectCurrentUserRole = (state) => state.auth.login.user?.role;
export const selectCurrentUserImage = (state) => state.auth.login.user?.image;
export const selectCurrentUserName = (state) => state.auth.login.user?.username;
export const selectCurrentAccessToken = (state) =>
  state.auth.login?.access_token;
export const selectCurrentRefreshToken = (state) =>
  state.auth.login?.refresh_token;
export const selectCurrentSession = (state) => state.auth.login?.session_id;
export const selectCurrentExpiredAccessToken = (state) =>
  state.auth.login?.access_token_expires_at;
