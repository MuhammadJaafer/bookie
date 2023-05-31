import { createSlice } from "@reduxjs/toolkit";
export interface NavState {
  open: boolean;
}

const initialState: NavState = {
  open: false,
};

export const NavSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    ToggleNav: (state) => {
      state.open = !state.open;
    },
    HideNav: (state) => {
      state.open = false;
    },
  },
});

export const { ToggleNav, HideNav } = NavSlice.actions;
export default NavSlice.reducer;
