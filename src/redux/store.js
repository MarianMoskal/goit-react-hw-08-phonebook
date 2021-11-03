import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filter } from "./contacts/contacts-reducers";
import { contactsApi } from "API/contacts-api";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";

// console.log(contactsApi.reducer);

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contacts = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(logger),
});

export const persistor = persistStore(store);
