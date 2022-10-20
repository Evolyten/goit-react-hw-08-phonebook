import {
  createReducer,
  // combineReducers,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import {
  fetchContact,
  addContact,
  deleteContact,
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from './contactsOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
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
    });
    builder.addCase(fetchCurrentUser.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const filterContacts = createAction('contacts/filterContacts');

export const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { item: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(fetchContact.fulfilled, (state, { payload }) => {
      state.item = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContact.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.item = [payload, ...state.item];
      state.isLoading = false;
    });
    builder.addCase(addContact.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.item = state.item.filter(n => n.id !== payload);
    });
    builder.addCase(deleteContact.pending, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(deleteContact.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});
