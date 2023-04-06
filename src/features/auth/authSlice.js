import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useLoginMutation, auth } from "../../services/authAPIs";

const initialState = {
  session_id: null,
  user: null,
  access_token: null,
  refresh_token: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSession: (state, action) => {
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("session_id", action.payload.session_id);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    },
  },
});

export const { addSession } = authSlice.actions;
export default authSlice.reducer;
