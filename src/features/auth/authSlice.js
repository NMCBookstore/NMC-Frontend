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
      // isAuthenticated: localStorage.getItem("access_token") ? true : false,
    },
    signup: {
      username: null,
      password: null,
      full_Name: null,
      email: null,
      image: null,
      sex: null,
      age: null,
      phone_number: null,
      isFetching: false,
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
      // state.login.isAuthenticated = true;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
    },

    signupStart: (state) => {
      state.signup.isFetching = true;
    },
    signupSuccess: (state, action) => {
      state.signup.username = action.payload.username;
      state.signup.password = action.payload.password;
      state.signup.full_Name = action.payload.full_Name;
      state.signup.email = action.payload.email;
      state.signup.image = action.payload.image;
      state.signup.sex = action.payload.sex;
      state.signup.age = action.payload.age;
      state.signup.phone_number = action.payload.phone_number;
      state.signup.isFetching = false;
    },
    signupFailed: (state) => {
      state.signup.isFetching = false;
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      // state.login.access_token = null;
      // window.location.reload();
      localStorage.clear();
      // localStorage.removeItem("persist:root");
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
  signupFailed,
  signupStart,
  signupSuccess,
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
