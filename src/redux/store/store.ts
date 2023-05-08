import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "../features/AuthModal/AuthModalSlice";
import BooksSlice from "../features/Books/BooksSlice";

export const store = configureStore({
  reducer: {
    AuthModal: AuthModalSlice,
    Books: BooksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
