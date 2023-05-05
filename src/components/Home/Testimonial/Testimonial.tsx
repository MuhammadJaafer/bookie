"use client";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/@vercel/og/satori";
import React from "react";
import avatar1 from "../../../../public/images/Avatar1.png";
import avatar2 from "../../../../public/images/Avatar2.png";
import avatar3 from "../../../../public/images/Avatar3.png";
import styles from "../../../styles/Home.module.scss";
import UI from "../../../styles/UI.module.scss";
import TestimonialCard from "./TestimonialCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const children1Variants = {
  hidden: {
    x: -50,
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
const children2Variants = {
  hidden: {
    y: -70,
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
const children3Variants = {
  hidden: {
    y: "100%",
    x: "-50%",
    opacity: 0,
  },
  visible: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

type TestimonialProps = {};

const testimonialData = [
  {
    name: "Hollie Stevens",
    text: "I stumbled upon this amazing website that sells books and I've been hooked ever since!",
    icon: avatar1,
  },
  {
    name: "Bobbi Carey",
    text: "Bookie's website is a book lover's dream come true!",
    icon: avatar2,
  },
  {
    name: "Richard Joseph",
    text: "I can always count on this website to have the latest releases and popular titles.",
    icon: avatar3,
  },
];

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`${styles.testimonial}`}
    >
      <div className={`${styles.testimonial_text}`}>
        <motion.h2
          variants={children1Variants}
          className={`${styles.testimonial_text_title}`}
        >
          Our Customers love what we do.
        </motion.h2>
        <motion.p
          variants={children1Variants}
          className={`${styles.testimonial_text_para}`}
        >
          Our book-loving community raves about Bookie&apos;s website and the
          seamless shopping experience it provides!
        </motion.p>
      </div>
      <div className={`${styles.testimonial_cards}`}>
        {testimonialData.map((card, i) => (
          <motion.div key={i} variants={children2Variants}>
            {
              // eslint-disable-next-line react/jsx-key
              <TestimonialCard
                text={card.text}
                name={card.name}
                icon={card.icon}
              />
            }
          </motion.div>
        ))}
      </div>
      <div className={`${styles.testimonial_footer}`}>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle1}`}
        ></motion.div>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle2}`}
        ></motion.div>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle3}`}
        ></motion.div>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle4}`}
        ></motion.div>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle5}`}
        ></motion.div>
        <motion.div
          variants={children3Variants}
          className={`${styles.testimonial_footer_triangle6}`}
        ></motion.div>
      </div>
    </motion.div>
  );
};
export default Testimonial;
