"use client";
import { motion } from "framer-motion";
import React from "react";
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
const FilterContainer: React.FC<FilterContainerProps> = () => {
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
    </motion.div>
  );
};
export default FilterContainer;
