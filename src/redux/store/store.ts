import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "../features/AuthModal/AuthModalSlice";
import BooksSlice from "../features/Books/BooksSlice";
import FilterSlice from "../features/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    AuthModal: AuthModalSlice,
    Books: BooksSlice,
    Filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
