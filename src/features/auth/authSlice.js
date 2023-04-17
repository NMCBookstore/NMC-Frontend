import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      session_id: null,
      // user: null,
      access_token: null,
      refresh_token: null,
      access_token_expires_at: null,
      refresh_token_expires_at: null,
      currentUser: null,
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
      phone_number: null,
      isFetching: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    setCredentials: (state, action) => {

      state.login.isFetching=false;
      state.login.currentUser = action.payload.currentUser;
      state.login.error = false;
      // state.login.user = user.username;
      state.login.session_id = action.payload.session_id;
      state.login.access_token = action.payload.access_token;
      state.login.refresh_token = action.payload.refresh_token;
      state.login.access_token_expires_at = action.payload.access_token_expires_at;
      state.login.refresh_token_expires_at = action.payload.refresh_token_expires_at;
      // state.login.isAuthenticated = true;

      // localStorage.setItem("access_token", action.payload.access_token);
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("session_id", action.payload.session_id);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      // localStorage.setItem("access_token_expires_at", action.payload.access_token_expires_at);
      // localStorage.setItem("refresh_token_expires_at", action.payload.refresh_token_expires_at);
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
    },

    signupStart: (state) => {
      state.signup.isFetching = true;
    },
    signupSuccess: (state, action) => {
      const { username, password, full_Name, email, image, phone_number } =
        action.payload;
      state.signup.username = username;
      state.signup.password = password;
      state.signup.full_Name = full_Name;
      state.signup.email = email;
      state.signup.image = image;
      state.signup.phone_number = phone_number;
    },
    signupFailed: (state) => {
      state.signup.isFetching = false;
    },

    logout: (state, action) => {
      state.isAuthenticated = false;
      // localStorage.clear();
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


export const selectCurrentUser = (state) => state.auth.login.user
export const selectCurrentUserName = (state) => state.auth.login.user.username
export const selectCurrentAccessToken = (state) => state.auth.login.access_token
export const selectCurrentRefreshToken = (state) =>  state.auth.login.refresh_token
export const selectCurrentSession = (state) =>  state.auth.login.session_id
export const selectCurrentExpiredAccessToken = (state) => state.auth.login.access_token_expires_at