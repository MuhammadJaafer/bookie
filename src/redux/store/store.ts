import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "../features/AuthModal/AuthModalSlice";
import BooksSlice from "../features/Books/BooksSlice";
import CartSlice from "../features/Cart/CartSlice";
import FilterSlice from "../features/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    AuthModal: AuthModalSlice,
    Books: BooksSlice,
    Filter: FilterSlice,
    Cart: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
