import { createReducer, createAction, createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contactsOperation';

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
