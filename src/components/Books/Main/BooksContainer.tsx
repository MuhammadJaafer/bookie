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
  const { Fetch, data, loading, error } = useSanityFetch();
  useEffect(() => {
    const getData = async () => {
      await Fetch(`*[ _type== "product" ]`);
    };
    getData();
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.main_booksContainer}`}
    >
      {loading &&
        loadingBooks.map((book, i) => (
          <motion.div
            variants={childrenVariants}
            key={i}
            className={`${UI.loadingBook}`}
          >
            <div className={`${UI.loadingBook_img}`}></div>
          </motion.div>
        ))}
      {data &&
        data.map((book: any) => (
          <motion.div variants={childrenVariants} key={book._id}>
            <Book book={book} />
          </motion.div>
        ))}
    </motion.div>
  );
};
export default BooksContainer;
