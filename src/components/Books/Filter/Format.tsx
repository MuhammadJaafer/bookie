"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "../../../styles/Books.module.scss";
type FormatProps = {};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "ease",
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 13,
    },
  },
};
const Format: React.FC<FormatProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      className={`${styles.filter_format}`}
    >
      <h2 className={`${styles.filter_format_title}`}>Format</h2>
      <ul className={`${styles.filter_format_list}`}>
        <motion.li
          variants={childrenVariants}
          whileHover={{
            scale: 1.15,
            color: "#1c1c1c",
            originX: 0,
          }}
          whileTap={{
            scale: 0.95,
            originX: 0,
          }}
          className={`${styles.filter_format_list_item}`}
        >
          HardCover
        </motion.li>
        <motion.li
          variants={childrenVariants}
          whileHover={{
            scale: 1.15,
            color: "#1c1c1c",
            originX: 0,
          }}
          whileTap={{
            scale: 0.95,
            originX: 0,
          }}
          className={`${styles.filter_format_list_item}`}
        >
          Paperback
        </motion.li>
        <motion.li
          variants={childrenVariants}
          whileHover={{
            scale: 1.15,
            color: "#1c1c1c",
            originX: 0,
          }}
          whileTap={{
            scale: 0.95,
            originX: 0,
          }}
          className={`${styles.filter_format_list_item}`}
        >
          E-Book
        </motion.li>
        <motion.li
          variants={childrenVariants}
          whileHover={{
            scale: 1.15,
            color: "#1c1c1c",
            originX: 0,
          }}
          whileTap={{
            scale: 0.95,
            originX: 0,
          }}
          className={`${styles.filter_format_list_item}`}
        >
          AudioBook
        </motion.li>
      </ul>
    </motion.div>
  );
};
export default Format;
