import { createReducer } from "@reduxjs/toolkit";

import { addContact, deleteContact, changeFilter } from "./contacts-actions.js";

export const contactsReducer = createReducer([], {
    [addContact]: (state, action) => {
        return [...state, action.payload]
    },
    [deleteContact]: (state, action) => {
        return [...state, action.payload]
    },
});


export const filterReducer = createReducer('', {
    [changeFilter]: (_, action) => {
        return action.payload
    },
});

