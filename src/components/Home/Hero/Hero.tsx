"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../../../styles/Home.module.scss";
import UI from "../../../styles/UI.module.scss";
import Steps from "./Steps";
type HeroProps = {};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const childrenVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};
const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.hero}`}
      >
        <div className={`${styles.hero_text}`}>
          <motion.h1 variants={childrenVariants}>
            A book lover&apos;s paradise.
          </motion.h1>
          <motion.h4 variants={childrenVariants}>
            Enter a world of endless possibilities with our collection of books
            that ignite your imagination
          </motion.h4>
          <motion.button
            variants={childrenVariants}
            className={`${UI.btn_round}`}
          >
            Start Your Journey
          </motion.button>
        </div>
        <div className={`${styles.hero_circle1}`}></div>
        <div className={`${styles.hero_circle2}`}></div>
      </motion.div>
      <Steps />
    </>
  );
};
export default Hero;
