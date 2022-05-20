// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: { contacts: [] },
//     reducers: {
//         addContact(state, action) {
//             return [...state, action.payload];
//         },
//         deleteContact(state, action) {
//             return state.filter(contact => contact.id !== action.payload);
//         },
//     },
// });

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
// };

// export const contactsReducer = persistReducer(
//     persistConfig,
//     contactsSlice.reducer,
// )

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: { filter: '' },
//     reducers: {
//         changeFilter(_, action) {
//             return action.payload;
//         },
//     },
// });

// export const { changeFilter } = filterSlice.actions;