import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from '../auth/authOperation';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isCurrentUserFetching: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(register.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(logIn.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(logIn.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(logOut.fulfilled, (state, { payload }) => {
      return { ...initialState };
    });
    builder.addCase(logOut.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isCurrentUserFetching = false;
    });
    builder.addCase(fetchCurrentUser.pending, (state, { payload }) => {
      state.isLoading = true;
      state.isCurrentUserFetching = true;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isCurrentUserFetching = false;
      state.isLoggedIn = false;
    });
  },
});
