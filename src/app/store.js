import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./reducers/user";

const rootReducer = combineReducers({ user });

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({ reducer: rootReducer, middleware: customizedMiddleware });
