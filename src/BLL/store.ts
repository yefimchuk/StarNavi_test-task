import { configureStore } from "@reduxjs/toolkit";
import { squares } from "./Squares/squares.slice";

export const store = configureStore({
  reducer: {
    squares: squares.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
