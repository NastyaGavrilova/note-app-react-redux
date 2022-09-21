import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/noteReducer";
const store = configureStore({
  reducer: noteReducer,
  devTools: process.env.NODE_ENV === "development",
})

export default store;
export type AppDispatch = typeof store.dispatch