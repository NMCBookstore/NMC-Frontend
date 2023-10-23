import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: "none",
};

const showLoginSlice = createSlice({
  name: 'showLogin',
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
  },
});

export const { login, signup, close } = showLoginSlice.actions;

export default showLoginSlice.reducer;