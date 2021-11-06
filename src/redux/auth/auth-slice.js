import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, logIn, logOut, register } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.loading = true;
    },
    [logIn.pending](state) {
      state.loading = true;
    },
    [logOut.pending](state) {
      state.loading = true;
    },
    [fetchCurrentUser.pending](state) {
      state.loading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, emeil: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
