import { client, urlFor } from "@/cms/client";
import useSanityFetch from "@/hooks/useSanityFetch";
import Image from "next/image";
import React, { ReactElement, useEffect } from "react";
import styles from "../../../styles/Home.module.scss";
export const revalidate = 3600;

async function BookMonth(): Promise<ReactElement<any, any>> {
  const data = await client.fetch(`*[ _type == "book_of_the_month"][0]`);
  if (!data) return <></>;
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
          <div
            style={{ background: background_color }}
            className={`${styles.book_right_container}`}
          >
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
}
export default BookMonth;
