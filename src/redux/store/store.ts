import { configureStore } from "@reduxjs/toolkit";
import AuthModalSlice from "../features/AuthModal/AuthModalSlice";
import BooksSlice from "../features/Books/BooksSlice";
import CartSlice from "../features/Cart/CartSlice";
import FilterSlice from "../features/Filter/FilterSlice";
import NavSlice from "../features/Navbar/NavSlice";

export const store = configureStore({
  reducer: {
    AuthModal: AuthModalSlice,
    Books: BooksSlice,
    Filter: FilterSlice,
    Cart: CartSlice,
    Nav: NavSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
