"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { createRef, useRef } from "react";
import num1 from "../../../../public/images/blob1.svg";
import num2 from "../../../../public/images/blob2.svg";
import num3 from "../../../../public/images/blob3.svg";
import styles from "../../../styles/Home.module.scss";
import UI from "../../../styles/UI.module.scss";

type StepsProps = {};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const childrenVariants = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};
const Steps: React.FC<StepsProps> = () => {
  return (
    <div className={`${styles.steps}`}>
      <h1 className={`${styles.steps_title}`}>
        Three Steps to Your Next Read!
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.6 }}
        className={`${styles.steps_list}`}
      >
        <motion.div
          variants={childrenVariants}
          className={`${styles.steps_list_item}`}
        >
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num1}
            alt={"1"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>Find your book</h3>
          <p className={`${styles.steps_list_item_para}`}>
            Use our search bar or browse through our categories to locate the
            book you want to order. We offer a vast selection of titles and
            genres to choose from.
          </p>
        </motion.div>
        <motion.div
          variants={childrenVariants}
          className={`${styles.steps_list_item}`}
        >
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num2}
            alt={"2"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>Add to cart</h3>
          <p className={`${styles.steps_list_item_para}`}>
            Once you&apos;ve found the book you want, simply add it to your
            shopping cart. You can continue shopping or proceed to checkout when
            you&apos;re ready.
          </p>
        </motion.div>
        <motion.div
          variants={childrenVariants}
          className={`${styles.steps_list_item}`}
        >
          <Image
            className={`${styles.steps_list_item_img}`}
            src={num3}
            alt={"3"}
          />
          <h3 className={`${styles.steps_list_item_title}`}>
            Checkout & enjoy
          </h3>
          <p className={`${styles.steps_list_item_para}`}>
            Enter shipping and payment details to complete order. Once
            confirmed, we&apos;ll handle the rest and ship your book to your
            doorstep. Enjoy your new read!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Steps;
