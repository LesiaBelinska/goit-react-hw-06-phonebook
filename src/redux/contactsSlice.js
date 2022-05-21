// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: { contacts: [], filter: '' },
//     reducers: {
//         addContact(state, action) {
//             return [...state, action.payload];
//         },
//         deleteContact(state, action) {
//             return state.filter(contact => contact.id !== action.payload);
//         },
//         changeFilter(_, action) {
//             return action.payload;
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

// export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;
