"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Footer.module.scss";
import UI from "../../styles/UI.module.scss";
type FooterProps = {};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
};
const children1Variants = {
  hidden: {
    x: -30,
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
    y: 100,
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

const Footer: React.FC<FooterProps> = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.6 }}
      className={`${styles.footer}`}
    >
      <motion.h2
        variants={children1Variants}
        className={`${styles.footer_title}`}
      >
        bookie
      </motion.h2>
      <div className={`${styles.footer_container}`}>
        <motion.div
          variants={children1Variants}
          className={`${styles.footer_container_block}`}
        >
          <h3 className={`${styles.footer_container_block_title}`}>Company</h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <Link href={"/about"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                About Us
              </li>
            </Link>
          </ul>
        </motion.div>
        <motion.div
          variants={children1Variants}
          className={`${styles.footer_container_block}`}
        >
          <h3 className={`${styles.footer_container_block_title}`}>Books</h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                New Releases
              </li>
            </Link>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                Top Trending
              </li>
            </Link>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                View all categories
              </li>
            </Link>
          </ul>
        </motion.div>
        <motion.div
          variants={children1Variants}
          className={`${styles.footer_container_block}`}
        >
          <h3 className={`${styles.footer_container_block_title}`}>
            follow us
          </h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                facebook
              </li>
            </a>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                instagram
              </li>
            </a>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                twitter
              </li>
            </a>
          </ul>
        </motion.div>
        <motion.div
          variants={children1Variants}
          className={`${styles.footer_container_block}`}
        >
          <h3 className={`${styles.footer_container_block_title}`}>
            contact us
          </h3>
          <form className={`${styles.footer_container_block_form}`}>
            <input
              className={`${styles.footer_container_block_form_input}`}
              type="email"
              name="email"
              placeholder="email"
            />
            <textarea
              className={`${styles.footer_container_block_form_textArea}`}
              name="message"
              cols={30}
              rows={6}
              placeholder="message"
            ></textarea>
            <button
              className={`${UI.smallBtn} ${styles.footer_container_block_form_btn}`}
            >
              send
            </button>
          </form>
        </motion.div>
      </div>
      <motion.div
        variants={children2Variants}
        className={`${styles.footer_copyRight}`}
      >
        <div className={`${styles.footer_copyRight_line}`}></div>
        <div className={`${styles.footer_copyRight_text}`}>
          bookie, Inc 2023
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Footer;
