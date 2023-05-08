import { createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  slug: string;
  image: string;
  available: boolean;
  topTrending: boolean;
  newReleases: boolean;
  format: string;
  rating: number;
}

export interface BooksState {
  initialBooks: Book[];
  allBooks: Book[];
  currentPage: number;
  currentView: Book[];
  viewNumber: number;
  currentBook: Book | null;
}

const initialState: BooksState = {
  initialBooks: [],
  allBooks: [],
  currentPage: 1,
  viewNumber: 8,
  currentView: [],
  currentBook: null,
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    setAllBooks: (state, action) => {
      state.allBooks = action.payload;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    prevPage: (state) => {
      state.currentPage--;
    },
    changeViewNumber: (state, action) => {
      state.viewNumber = action.payload;
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    setInitialBooks: (state, action) => {
      state.initialBooks = action.payload;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
  },
});

export const {
  prevPage,
  nextPage,
  setAllBooks,
  setCurrentBook,
  setCurrentView,
  changeViewNumber,
  setInitialBooks,
  resetPage,
} = BooksSlice.actions;
export default BooksSlice.reducer;
