"use client";
const format = ["all", "hardcover", "paperback", "e-book", "audiobook"];
import { setFormat } from "@/redux/features/Filter/FilterSlice";
import { RootState } from "@/redux/store/store";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const currentFormat = useSelector((state: RootState) => state.Filter.format);

  const dispatch = useDispatch();
  return (
    <motion.div
      variants={containerVariants}
      className={`${styles.filter_format}`}
    >
      <h2 className={`${styles.filter_format_title}`}>Format</h2>
      <ul className={`${styles.filter_format_list}`}>
        {format.map((item) => {
          return (
            <motion.li
              key={item}
              variants={childrenVariants}
              whileHover={{
                scale: 1.15,
                originX: 0,
              }}
              whileTap={{
                scale: 0.95,
                originX: 0,
              }}
              className={`${styles.filter_format_list_item} ${
                currentFormat === item
                  ? styles.filter_format_list_item_active
                  : ""
              }`}
              onClick={() => {
                dispatch(setFormat(item));
              }}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};
export default Format;
