"use client";
import Book from "@/components/Books/Main/Book";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { v4 } from "uuid";
import styles from "../../../styles/Home.module.scss";
import UI from "../../../styles/UI.module.scss";
type CarouselProps = {
  data: any[];
  title: string;
};

const Carousel: React.FC<CarouselProps> = ({ data, title }) => {
  const [width, setWidth] = useState<number>(1200);
  const [all, setAll] = useState(data);
  const [viewNumber, setViewNumber] = useState(Math.min(4, all.length));
  const [counter, setCounter] = useState(0);
  const [view, setView] = useState<number[]>(all.slice(counter, viewNumber));
  const next = () => {
    if (counter + viewNumber >= all.length) {
      setCounter(0);
      return;
    }
    setCounter((prev) => prev + 1);
  };
  const prev = () => {
    if (counter <= 0) {
      setCounter(all.length - viewNumber);
      return;
    }
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    setView(all.slice(counter, viewNumber + counter));
  }, [all, counter, viewNumber]);

  // to change the current window width
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
    if (width < 800) {
      setViewNumber(Math.min(2, all.length));
    } else if (width < 1000) {
      setViewNumber(Math.min(3, all.length));
    } else if (width > 1000) {
      setViewNumber(Math.min(4, all.length));
    }
    setView(all.slice(counter, viewNumber + counter));

    return () => window.removeEventListener("resize", changeWidth);
  }, [all.length, viewNumber, width]);
  return (
    <div className={`${styles.featured}`}>
      <h2 className={`${styles.featured_title}`}>{title}</h2>
      <div className={`${styles.featured_main}`}>
        <div
          className={`${styles.featured_main_left}`}
          onClick={() => {
            prev();
          }}
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={`${styles.featured_main_view}`}>
          {view.map((book: any) => (
            <motion.div
              initial={{
                scale: 0.95,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 8,
              }}
              key={v4()}
            >
              <Book book={book} />
            </motion.div>
          ))}
        </div>
        <div
          className={`${styles.featured_main_right}`}
          onClick={() => {
            next();
          }}
        >
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
