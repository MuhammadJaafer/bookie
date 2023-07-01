// [
//     { label: "Total", cost: 2.43 },
//     { label: "Subtotal", cost: 22.34 },
//     { label: "Duties", cost: 23.23 },
//     { label: "Shipping", cost: 10.0 },
//     { label: "Tax", cost: 24.75 },
//   ]

import { createSlice } from "@reduxjs/toolkit";

export interface CheckoutState {
  shipping: { open: boolean; done: boolean };
  payment: { open: boolean; done: boolean };
}

const initialState: CheckoutState = {
  shipping: { open: true, done: false },
  payment: { open: false, done: false },
};
export const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    toggleShipping: (state) => {
      state.shipping.open = !state.shipping.open;
    },
    openShipping: (state) => {
      state.shipping.open = true;
    },
    closeShipping: (state) => {
      state.shipping.open = false;
    },
    togglePayment: (state) => {
      state.payment.open = !state.payment.open;
    },
    openPayment: (state) => {
      state.payment.open = true;
    },
    closePayment: (state) => {
      state.payment.open = false;
    },
    shippingDone: (state) => {
      state.shipping.done = true;
    },
    paymentDone: (state) => {
      state.payment.done = true;
    },
  },
});

export const {
  closePayment,
  openPayment,
  closeShipping,
  openShipping,
  togglePayment,
  toggleShipping,
  shippingDone,
  paymentDone,
} = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
