"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";
type RateProps = {};
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
const stars = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
];
const Rate: React.FC<RateProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      className={`${styles.filter_rate}`}
    >
      <h2 className={`${styles.filter_rate_title}`}>Rate</h2>
      <div className={`${styles.filter_rate_starsContainer}`}>
        {stars.map((set, i) => (
          <motion.div
            variants={childrenVariants}
            whileHover={{
              scale: 1.1,
              originX: 0,
            }}
            whileTap={{
              scale: 0.95,
              originX: 0,
            }}
            key={i}
            className={`${styles.filter_rate_starsContainer_stars}`}
          >
            {set.map((star, j) => {
              if (star) {
                return (
                  <div
                    key={j}
                    className={`${styles.filter_rate_starsContainer_stars_star_active}`}
                  >
                    <FaStar />
                  </div>
                );
              } else {
                return (
                  <div
                    key={j}
                    className={`${styles.filter_rate_starsContainer_stars_star}`}
                  >
                    <FaStar />
                  </div>
                );
              }
            })}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Rate;
