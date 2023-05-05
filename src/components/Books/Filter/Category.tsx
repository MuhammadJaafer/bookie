"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../styles/Books.module.scss";

type CategoryProps = {};
const Categories = [
  "all",
  "romance",
  "science",
  "history",
  "fantasy",
  "horror",
  "thriller",
  "self help",
  "Medical & nursing",
  "technology",
];
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
const Category: React.FC<CategoryProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      className={`${styles.filter_categories}`}
    >
      <h2 className={`${styles.filter_categories_title}`}>Category</h2>
      <ul className={`${styles.filter_categories_list}`}>
        {Categories.map((category) => (
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
            className={`${styles.filter_categories_item}`}
            key={category}
          >
            {category}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
export default Category;
