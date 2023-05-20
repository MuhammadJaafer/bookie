"use client";
import { client, urlFor } from "@/cms/client";
import useSanityFetch from "@/hooks/useSanityFetch";
import { spawn } from "child_process";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";
import UI from "../../../styles/UI.module.scss";

import useBooks from "@/hooks/useBooks";
import Book from "./Book";
type BooksContainerProps = {};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
};
const loadingBooks = new Array(12).fill(1);
const BooksContainer: React.FC<BooksContainerProps> = () => {
  const { loading, error, currentView } = useBooks();
  return (
    <>
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.main_booksContainer}`}
        >
          {loadingBooks.map((book, i) => (
            <div key={i} className={`${UI.loadingBook}`}>
              <div className={`${UI.loadingBook_img}`}></div>
            </div>
          ))}
        </motion.div>
      )}
      {!loading && currentView.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.main_booksContainer}`}
        >
          {currentView.map((book: any) => (
            <motion.div variants={childrenVariants} key={book._id}>
              <Book book={book} />
            </motion.div>
          ))}
        </motion.div>
      )}
      {!loading && currentView.length < 1 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.main_booksContainer}`}
        >
          <div className={`${styles.main_booksContainer_noData}`}>
            No Books :( <br /> Try different filter setting
          </div>
        </motion.div>
      )}
    </>
  );
};
export default BooksContainer;
