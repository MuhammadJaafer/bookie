"use client";
import { client, urlFor } from "@/cms/client";
import { spawn } from "child_process";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";
import Book from "./Book";
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
async function BooksContainer() {
  const data = await client.fetch(`*[ _type== "product" ]`);
  if (!data) return <></>;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.main_booksContainer}`}
    >
      {data.map((book: any) => (
        <motion.div variants={childrenVariants} key={book._id}>
          <Book book={book} />
        </motion.div>
      ))}
    </motion.div>
  );
}
export default BooksContainer;
