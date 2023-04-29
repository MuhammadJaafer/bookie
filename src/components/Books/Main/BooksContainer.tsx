import { client, urlFor } from "@/cms/client";
import { spawn } from "child_process";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";

async function BooksContainer() {
  const data = await client.fetch(`*[ _type== "product" ]`);
  if (!data) return <></>;
  return (
    <div className={`${styles.main_booksContainer}`}>
      {data.map((book: any) => {
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
            key={book.slug.current}
          >
            <div className={`${styles.main_booksContainer_book_img}`}>
              <Image
                src={urlFor(book.image).url()}
                alt={"book"}
                width={500}
                height={500}
              />
            </div>
            <h3 className={`${styles.main_booksContainer_book_name}`}>
              {book.name}
            </h3>
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
                    <div
                      className={`${styles.main_booksContainer_book_stars_star}`}
                    >
                      <FaStar />
                    </div>
                  );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default BooksContainer;
