import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [] },
    reducers: {
        add(state, action) {
            return [...state, action.payload];
        },
        remove(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { add, remove } = contactsSlice.actions;

const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: '' },
    reducers: {
        change(_, action) {
            return action.payload;
        },
    },
});

export const { change } = contactsSlice.actions;