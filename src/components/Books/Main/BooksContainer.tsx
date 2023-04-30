import { client, urlFor } from "@/cms/client";
import { spawn } from "child_process";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";
import Book from "./Book";

async function BooksContainer() {
  const data = await client.fetch(`*[ _type== "product" ]`);
  if (!data) return <></>;
  return (
    <div className={`${styles.main_booksContainer}`}>
      {data.map((book: any) => (
        <Book key={book.slug} book={book} />
      ))}
    </div>
  );
}
export default BooksContainer;
