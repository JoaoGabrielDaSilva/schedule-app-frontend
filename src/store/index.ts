import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./ducks/user";

const reducers = {
  user: userReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
