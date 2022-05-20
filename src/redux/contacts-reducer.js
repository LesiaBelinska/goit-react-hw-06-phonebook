import { createReducer } from "@reduxjs/toolkit";

import { add, remove, change } from "./contacts-actions.js";

export const contactsReducer = createReducer([], {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) => state.filter(contact => contact.id !== action.payload),
});


export const filterReducer = createReducer('', {
    [change]: (_, action) => action.payload,
});