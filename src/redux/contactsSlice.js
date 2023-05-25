import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./operations";
import { fetchContacts } from "utilites/api";
// import { nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    {
        id: '245634764',
        name: 'Mama',
        number: '+3548609745',
    },
    {
        id: '245656475869764',
        name: 'Master',
        number: '+3545678745',
    },
    {
        id: '2456564',
        name: 'Clerk',
        number: '+547657',
    }
];

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    // name: 'contacts',
    // initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        [deleteContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
            [deleteContact.rejected] (state, action) {
                state.isLoading = false;
                state.error = action.payload;
            },
    //     addContact: {
    //         reducer(state, action) {
    //             state.push(action.payload);
    //     },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name,
    //                     number,
    //             }}
    //         }
    // },

        // removeContact: (state, action) => {
        //     return state.filter(contact => contact.id !== action.payload);
        // },
    }
});

// export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;