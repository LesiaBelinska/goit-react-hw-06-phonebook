import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { contactsReducer, filterReducer } from "./contacts-reducer.js";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    // прослойка, для виводу у консоль
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware(), logger],
});

