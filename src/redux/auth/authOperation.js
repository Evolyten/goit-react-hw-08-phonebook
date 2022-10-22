import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import {
  ToastFailed,
  ToastFailedRegistration,
  ToastSuccess,
} from 'components/Toast/Toast';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      ToastSuccess();
      return data;
    } catch (error) {
      ToastFailedRegistration();
      return thunkApi.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      ToastFailed();
      return thunkApi.rejectWithValue(
        'Incorrect login or password. Pls try one more time'
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    ToastFailedRegistration();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (!token) {
      return thunkApi.rejectWithValue(4);
    }
    try {
      token.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue();
    }
  }
);
