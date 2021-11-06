import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import { getContacts, addContact, removeContact } from "./contacts-operations";

const INITIAL_STATE = {
  contacts: [],
  error: null,
  getContactsLoading: false,
  addContactLoading: false,
  removeContactLoading: false,
  filter: "",
};

export const filter = createReducer(INITIAL_STATE.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const contacts = createReducer(INITIAL_STATE.contacts, {
  [getContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const isLoading = createReducer(INITIAL_STATE.isLoading, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,

//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [removeContact.pending]: () => true,
//   [removeContact.fulfilled]: () => false,
//   [removeContact.rejected]: () => false,
// });

const getContactsLoading = createReducer(INITIAL_STATE.getContactsLoading, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const addContactLoading = createReducer(INITIAL_STATE.addContactLoading, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const removeContactLoading = createReducer(INITIAL_STATE.removeContactLoading, {
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const error = createReducer(INITIAL_STATE.error, {
  [getContacts.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => null,

  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,

  [removeContact.rejected]: (_, { payload }) => payload,
  [removeContact.pending]: () => null,
});

export const contactsReducers = combineReducers({
  contacts,
  getContactsLoading,
  addContactLoading,
  removeContactLoading,
  error,
  filter,
});
