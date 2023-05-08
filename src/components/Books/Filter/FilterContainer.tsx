"use client";
import useBooks from "@/hooks/useBooks";
import { resetFilter } from "@/redux/features/Filter/FilterSlice";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "../../../styles/Books.module.scss";
import Category from "./Category";
import Format from "./Format";
import PriceRange from "./PriceRange";
import Rate from "./Rate";

type FilterContainerProps = {};
const FilterVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
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
const FilterContainer: React.FC<FilterContainerProps> = () => {
  const { HandleApplyFilter, HandleResetFilter } = useBooks();
  return (
    <motion.div
      variants={FilterVariants}
      initial="hidden"
      animate="visible"
      className={`${styles.filter}`}
    >
      <Category />
      <PriceRange />
      <Rate />
      <Format />
      <motion.div
        variants={containerVariants}
        className={`${styles.filter_apply}`}
      >
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            HandleApplyFilter();
          }}
        >
          Apply
        </motion.button>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            HandleResetFilter();
          }}
        >
          Reset
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
export default FilterContainer;
