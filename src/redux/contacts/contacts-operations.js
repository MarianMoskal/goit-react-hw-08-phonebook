import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data: contacts } = await axios.get("/contacts");
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      // console.log(res);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, { rejectWithValue }) => {
    // console.log(id);
    try {
      await axios.delete(`/contacts/${id}`);
      // console.log(res);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
