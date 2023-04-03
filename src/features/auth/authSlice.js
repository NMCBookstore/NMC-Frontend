import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  user: "",
  loading: false,
  error: null,
};

export const sigin = createAsyncThunk("user/login", async (body) => {
  let res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: localStorage.setItem("token"),
    },
    body: JSON.stringify(body),
  });

  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = sessionStorage.getItem("user")
    },
  },
  extraReducers: {
    [sigin.pending]: (state, action) => {
      state.loading = true;
    },
    [sigin.fulfilled]: (
      state,
      { payload: { session_id, user, access_token, refresh_token } }
    ) => {
      state.loading = false;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.session_id = session_id;
      state.user = user;

      sessionStorage.setItem("access_token", JSON.stringify(access_token));
      sessionStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      sessionStorage.setItem("session_id", JSON.stringify(session_id));
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    [sigin.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
