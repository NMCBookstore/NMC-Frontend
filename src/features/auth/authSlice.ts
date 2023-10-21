import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    session_id: null,
    user: null,
    access_token: null,
    refresh_token: null,
    access_token_expires_at: null,
    refresh_token_expires_at: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    setCredentials: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.user;
      state.error = false;
      if (
        action.payload?.session_id &&
        action.payload?.access_token &&
        action.payload?.refresh_token &&
        action.payload?.access_token_expires_at &&
        action.payload?.refresh_token_expires_at
      ) {
        state.session_id = action.payload.session_id;
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
        state.access_token_expires_at = action.payload.access_token_expires_at;
        state.refresh_token_expires_at =
          action.payload.refresh_token_expires_at;
      }
    },
    loginFailed: (state) => {
      state.isFetching = false;
    },
  },
});
export const { setCredentials, loginFailed, loginStart } = authSlice.actions;

export default authSlice.reducer;
