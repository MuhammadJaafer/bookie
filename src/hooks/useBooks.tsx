import { urlFor } from "@/cms/client";
import {
  Book,
  nextPage,
  prevPage,
  resetPage,
  setAllBooks,
  setCurrentView,
  setInitialBooks,
  setNumberOfPages,
} from "@/redux/features/Books/BooksSlice";
import { resetFilter, toggleFilter } from "@/redux/features/Filter/FilterSlice";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { BsCloudLightning } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import useSanityFetch from "./useSanityFetch";

const useBooks = () => {
  const { Fetch, data, loading, error } = useSanityFetch();
  const dispatch = useDispatch();
  const Filter = useSelector((state: RootState) => state.Filter);
  const currentView = useSelector(
    (state: RootState) => state.Books.currentView
  );
  const numberOfPages = useSelector(
    (state: RootState) => state.Books.numberOfPages
  );
  const allBooks = useSelector((state: RootState) => state.Books.allBooks);
  const initialBooks = useSelector(
    (state: RootState) => state.Books.initialBooks
  );
  const currentPage = useSelector(
    (state: RootState) => state.Books.currentPage
  );
  const viewNumber = useSelector((state: RootState) => state.Books.viewNumber);

  //get all books from the cms
  useEffect(() => {
    const getData = async () => {
      await Fetch(`*[ _type== "product" ]`);
    };
    getData();
  }, []);

  //set all books
  useEffect(() => {
    if (data) {
      const allBooks: Book[] = data.map((book: any) => {
        return {
          id: book._id,
          name: book.name,
          category: book.category,
          description: book.description,
          price: book.price,
          slug: book.slug.current,
          image: urlFor(book.image).url(),
          available: book.available,
          topTrending: book.topTrending,
          newReleases: book.newReleases,
          format: book.format,
          rating: book.rating,
        };
      });
      dispatch(setAllBooks(allBooks));
      dispatch(setInitialBooks(allBooks));
    }
  }, [data]);

  //Update Current view
  useEffect(() => {
    if (allBooks) {
      const end = currentPage * viewNumber;
      const start = (currentPage - 1) * viewNumber;
      const currentView = allBooks.slice(start, end);
      dispatch(setCurrentView(currentView));
      dispatch(setNumberOfPages(Math.ceil(allBooks.length / viewNumber)));
    }
  }, [allBooks, currentPage, viewNumber, currentPage]);

  const HandleNextPage = () => {
    if (currentPage < Math.ceil(allBooks.length / viewNumber)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(nextPage());
    }
  };
  const HandlePrevPage = () => {
    if (currentPage > 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(prevPage());
    }
  };

  const HandleResetFilter = () => {
    dispatch(toggleFilter());
    dispatch(resetFilter());
    dispatch(setAllBooks(initialBooks));
    dispatch(resetPage());
    dispatch(setNumberOfPages(Math.ceil(allBooks.length / viewNumber)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const HandleApplyFilter = () => {
    const filteredBooks = initialBooks.filter((book) => {
      if (
        //category filter
        (book.category === Filter.category || Filter.category === "all") &&
        //rate filter
        book.rating >= Filter.rate &&
        //price filter
        book.price > Filter.priceRange[0] &&
        book.price < Filter.priceRange[1] &&
        //format filter
        (book.format === Filter.format || Filter.format === "all")
      ) {
        return true;
      }
    });
    dispatch(toggleFilter());
    dispatch(setAllBooks(filteredBooks));
    dispatch(resetPage());
    dispatch(setNumberOfPages(Math.ceil(allBooks.length / viewNumber)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    loading,
    error,
    currentView,
    initialBooks,
    HandleNextPage,
    HandlePrevPage,
    currentPage,
    HandleApplyFilter,
    HandleResetFilter,
    numberOfPages,
  };
};
export default useBooks;
