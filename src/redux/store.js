import { configureStore } from "@reduxjs/toolkit";
import {
persistStore,
persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
//import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {  contactsReducer, filterReducer } from "./contacts-reducer.js";

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist:['filter'], //blacklist - зберігати окрім такого поля, whitelist - зберігати тільки такі поля
}

export const persistedReducer = persistReducer(
    contactsPersistConfig,
    contactsReducer,
);


export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,
                    PURGE, REGISTER],
            },
        });
        }
    // прослойка, для виводу у консоль
    // middleware: getDefaultMiddleware =>
    //     [...getDefaultMiddleware(), logger],
});


export const persistor = persistStore(store);



//For contactsSlice

// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { contactsReducer, filterSlice } from "./contactsSlice.js";


// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer, 
//         filter: filterSlice,
//     },
//     middleware(getDefaultMiddleware) {
//         return getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         });
//     },
// });

// export const persistor = persistStore(store);