import { urlFor } from "@/cms/client";
import {
  Book,
  nextPage,
  prevPage,
  setAllBooks,
  setCurrentView,
} from "@/redux/features/Books/BooksSlice";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSanityFetch from "./useSanityFetch";

const useBooks = () => {
  const { Fetch, data, loading, error } = useSanityFetch();
  const dispatch = useDispatch();
  const currentView = useSelector(
    (state: RootState) => state.Books.currentView
  );
  const allBooks = useSelector((state: RootState) => state.Books.allBooks);
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
          slug: book.slug.curren,
          image: urlFor(book.image).url(),
          available: book.available,
          topTrending: book.topTrending,
          newReleases: book.newReleases,
          format: book.format,
          rating: book.rating,
        };
      });
      dispatch(setAllBooks(allBooks));
    }
  }, [data]);

  //Update Current view
  useEffect(() => {
    if (allBooks) {
      const end = currentPage * viewNumber;
      const start = (currentPage - 1) * viewNumber;
      const currentView = allBooks.slice(start, end);
      dispatch(setCurrentView(currentView));
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

  return {
    loading,
    error,
    currentView,
    HandleNextPage,
    HandlePrevPage,
    currentPage,
  };
};
export default useBooks;
