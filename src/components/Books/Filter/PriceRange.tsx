"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
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
  const [max, setMax] = useState(70);
  const [min, setMin] = useState(5);
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
          defaultValue={[min, max]}
          min={0}
          max={150}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={20}
          onChange={(val) => {
            setMin(val[0]);
            setMax(val[1]);
          }}
        />
        <div className={`${styles.filter_price_values}`}>
          <div className={`${styles.filter_price_values_min}`}>{min}JD</div>
          <div className={`${styles.filter_price_values_max}`}>{max}JD</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default PriceRange;
