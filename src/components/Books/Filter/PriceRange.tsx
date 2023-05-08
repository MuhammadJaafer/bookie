"use client";
import { setPriceRange } from "@/redux/features/Filter/FilterSlice";
import { RootState } from "@/redux/store/store";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSlider from "react-slider";
import styles from "../../../styles/Books.module.scss";
import "../../../styles/special/slider.scss";
type PriceRangeProps = {};
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

const PriceRange: React.FC<PriceRangeProps> = () => {
  const dispatch = useDispatch();
  const currentPrice = useSelector(
    (state: RootState) => state.Filter.priceRange
  );

  return (
    <motion.div
      variants={containerVariants}
      className={`${styles.filter_price}`}
    >
      <h2 className={`${styles.filter_price_title}`}>Price Range</h2>
      <motion.div variants={childrenVariants}>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          defaultValue={currentPrice}
          min={0}
          max={150}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={20}
          onChange={(val) => {
            dispatch(setPriceRange(val));
          }}
        />
        <div className={`${styles.filter_price_values}`}>
          <div className={`${styles.filter_price_values_min}`}>
            {currentPrice[0]}JD
          </div>
          <div className={`${styles.filter_price_values_max}`}>
            {currentPrice[1]}JD
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default PriceRange;
