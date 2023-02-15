import { configureStore } from "@reduxjs/toolkit";
import { treenationApi } from "../Features/TreenationApi";
import { counterSlice } from "../Features/CounterSlice";

export const store = configureStore({
  reducer: {
    [treenationApi.reducerPath]: treenationApi.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(treenationApi.middleware),
});
