import { createSlice } from "@reduxjs/toolkit";

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
      isAuthenticated: localStorage.getItem("access_token") ? true : false,
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
      const { user, session_id, access_token, refresh_token, access_token_expires_at, refresh_token_expires_at } = action.payload;
      state.login.user = user;
      state.login.session_id = session_id;
      state.login.access_token = access_token;
      state.login.refresh_token = refresh_token;
      state.login.access_token_expires_at = access_token_expires_at;
      state.login.refresh_token_expires_at = refresh_token_expires_at;
      state.login.isAuthenticated = true;

      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("session_id", action.payload.session_id);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
      localStorage.setItem("access_token_expires_at", action.payload.access_token_expires_at);
      localStorage.setItem("refresh_token_expires_at", action.payload.refresh_token_expires_at);
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
      localStorage.clear();
    },
    refresh: (state, action) => {
      state.refresh_token = localStorage.getItem("refresh_token");
      state.access_token_expires_at = localStorage.getItem("access_token_expires_at");
      state.refresh_token_expires_at = localStorage.getItem("refresh_token_expires_at");
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

export const selectCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user).username : null;
}
export const selectCurrentAccessToken = () => localStorage.getItem('access_token')
export const selectCurrentRefreshToken = () =>  localStorage.getItem('refresh_token');;
export const selectCurrentSession = () =>  localStorage.getItem('session_id');;
