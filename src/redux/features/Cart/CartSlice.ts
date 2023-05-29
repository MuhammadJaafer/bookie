import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct {
  id: string;
  name: string;
  format: string;
  image: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface CartState {
  products: CartProduct[];
  subtotal: number;
  numberOfProducts: number;
  open: boolean;
}
let initialState: CartState;
const init: CartState = {
  products: [],
  subtotal: 0,
  numberOfProducts: 0,
  open: false,
};
if (typeof window !== "undefined") {
  if (localStorage.getItem("cartData")) {
    initialState = JSON.parse(localStorage.getItem("cartData")!);
    initialState.open = false;
  } else {
    initialState = init;
  }
} else {
  initialState = init;
}

const storeDataInLocalStorage = (state: CartState) => {
  localStorage.setItem("cartData", JSON.stringify(state));
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //if it is already added
      if (state.products.some((p) => p.id === action.payload.id)) {
        state.products.forEach((p) => {
          if (p.id === action.payload.id) {
            p.quantity++;
            p.totalPrice = Math.round((p.price + p.totalPrice) * 100) / 100;
          }
        });
      } else {
        state.products.push(action.payload);
      }
      // update the number of products
      state.numberOfProducts++;
      // update the subtotal
      state.subtotal =
        Math.round((action.payload.price + state.subtotal) * 100) / 100;

      //update the local storage
      storeDataInLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      //get the quantity
      let quantity = 0;
      state.products.map((p) => {
        if (p.id === action.payload.id) {
          quantity = p.quantity;
        }
      });
      //removing the product
      state.products = state.products.filter(
        (product) => product.id != action.payload.id
      ); // update the number of products
      state.numberOfProducts -= quantity;
      // update the subtotal
      state.subtotal =
        Math.round((state.subtotal - action.payload.totalPrice) * 100) / 100;

      //update the local storage
      storeDataInLocalStorage(state);
    },
    removeOneFromCart: (state, action) => {
      state.products.forEach((p) => {
        if (p.id === action.payload.id) {
          if (p.quantity > 1) {
            p.quantity--;
            p.totalPrice = Math.round((p.totalPrice - p.price) * 100) / 100;
          } else {
            state.products = state.products.filter(
              (p) => p.id != action.payload.id
            );
          }
        }
      });
      // update the number of products
      state.numberOfProducts--;
      // update the subtotal
      state.subtotal =
        Math.round((state.subtotal - action.payload.price) * 100) / 100;
      //update the local storage
      storeDataInLocalStorage(state);
    },
    openCart: (state) => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  removeOneFromCart,
} = CartSlice.actions;
export default CartSlice.reducer;
