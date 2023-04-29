import { createSlice } from "@reduxjs/toolkit";
export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

const initialState: AuthModalState = {
  open: false,
  view: "login",
};

export const AuthModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    switchToLogin: (state) => {
      state.view = "login";
    },
    switchToSignup: (state) => {
      state.view = "signup";
    },
    switchToResetPassword: (state) => {
      state.view = "resetPassword";
    },
    ToggleModal: (state) => {
      state.open = !state.open;
    },
    HideModal: (state) => {
      state.open = false;
    },
  },
});

export const {
  switchToLogin,
  switchToResetPassword,
  switchToSignup,
  ToggleModal,
  HideModal,
} = AuthModalSlice.actions;
export default AuthModalSlice.reducer;
