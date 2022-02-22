import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "./phoneSlice";


export const store = configureStore({
  reducer: {
    phones: phoneSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
