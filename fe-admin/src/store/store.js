import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import apiMiddleware from "./middleware/api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiMiddleware,
  ],
});
