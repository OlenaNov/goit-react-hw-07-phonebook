import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

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

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
        },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                }}
            }
    },

        removeContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    }
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;