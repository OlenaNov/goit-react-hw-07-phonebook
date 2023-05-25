import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (name, number, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectedWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);