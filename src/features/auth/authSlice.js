import { FeaturedPlayList } from "@mui/icons-material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  user: "",
  token: "",
  loading: false,
  error: null,
};

export const login = createAsyncThunk("posts/fetchPosts", async({ body }) => {

  let res = await fetch("http://localhost:8080/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  });

  // const response = await axios.post("{{LOCALHOST}}/login", {
  //   email,
  //   password,
  // });


  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
  },
  extraReducers: {
    [login.pending]:(state,action) => {
        state.loading=true
    },
    [login.fulfilled]:(state,{payload:{user, token}}) => {
        state.loading = false;
        state.token = token;
        state.user = user;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));

    },
    [login.rejected]:(state,action) => {
        state.loading=true
    },

  }
});

export const {addToken, addUser} = authSlice.actions;
export default authSlice.reducer;
