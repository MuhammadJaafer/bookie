"use client";
import { urlFor } from "@/cms/client";
import useSanityFetch from "@/hooks/useSanityFetch";
import Image from "next/image";
import React, { useEffect } from "react";
import bookImg from "../../../../public/images/book.png";
import styles from "../../../styles/Home.module.scss";
import UI from "../../../styles/UI.module.scss";
type BookMonthProps = {};

const BookMonth: React.FC<BookMonthProps> = () => {
  const { Fetch, error, loading, data } = useSanityFetch();
  useEffect(() => {
    const FetchData = () => {
      Fetch(`*[ _type == "book_of_the_month" ][0]`);
    };
    FetchData();
  }, []);
  if (error) return <>error</>;
  if (loading) return <>Loading...</>;
  if (!data) return <></>;
  console.log(data);
  const { background_color, description, image, title } = data!;
  return (
    <>
      <div className={`${styles.book}`}>
        <div className={`${styles.book_left}`}>
          <h1 className={`${styles.book_left_title}`}>book of the month</h1>
          <div className={`${styles.book_left_text}`}>
            <h2 className={`${styles.book_left_text_title}`}>{title}</h2>
            <p className={`${styles.book_left_text_para}`}>{description}</p>
          </div>
        </div>
        <div className={`${styles.book_right}`}>
          <div className={`${styles.book_right_container}`}>
            <Image
              className={`${styles.book_right_container_img}`}
              src={urlFor(image).url()}
              width={500}
              height={500}
              alt={"book"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BookMonth;
