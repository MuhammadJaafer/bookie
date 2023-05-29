import { createSlice } from "@reduxjs/toolkit";

export interface filterState {
  category:
    | "all"
    | "romance"
    | "science"
    | "history"
    | "fantasy"
    | "horror"
    | "thriller"
    | "self help"
    | "Medical & nursing"
    | "technology";
  priceRange: [number, number];
  rate: number;
  format: "all" | "paperback" | "hardcover" | "e-book" | "audiobook";
  show: boolean;
}
const initialState: filterState = {
  category: "all",
  priceRange: [5, 70],
  rate: 1,
  format: "all",
  show: false,
};

const FilterSlice = createSlice({
  name: "Filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    setFormat: (state, action) => {
      state.format = action.payload;
    },
    resetFilter: (state) => {
      state.category = "all";
      state.format = "all";
      state.rate = 1;
      state.priceRange = [5, 70];
    },
    toggleFilter: (state) => {
      state.show = !state.show;
    },
  },
});

export const {
  toggleFilter,
  setCategory,
  setFormat,
  setPriceRange,
  setRate,
  resetFilter,
} = FilterSlice.actions;
export default FilterSlice.reducer;
