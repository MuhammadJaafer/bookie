import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "../features/AuthModal/AuthModalSlice";

export const store = configureStore({
  reducer: {
    AuthModal: AuthModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
