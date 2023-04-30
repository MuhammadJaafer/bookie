import { urlFor } from "@/cms/client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";

type BookProps = {
  book: any;
};

const Book: React.FC<BookProps> = ({ book }) => {
  //prepare stars
  let num = book.rating;
  let stars = [0, 0, 0, 0, 0];
  stars.map((star, i) => {
    if (num > 0) {
      num--;
      stars[i]++;
    }
  });
  return (
    <div
      className={`${styles.main_booksContainer_book}`}
      //   key={book.slug.current}
    >
      <div className={`${styles.main_booksContainer_book_img}`}>
        <Image
          src={urlFor(book.image).url()}
          alt={"book"}
          width={500}
          height={500}
        />
      </div>
      <h3 className={`${styles.main_booksContainer_book_name}`}>{book.name}</h3>
      <span className={`${styles.main_booksContainer_book_price}`}>
        {book.price}$
      </span>
      <div className={`${styles.main_booksContainer_book_stars}`}>
        {stars.map((star) => {
          if (star)
            return (
              <div
                className={`${styles.main_booksContainer_book_stars_star_active}`}
              >
                <FaStar />
              </div>
            );
          else
            return (
              <div className={`${styles.main_booksContainer_book_stars_star}`}>
                <FaStar />
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default Book;
