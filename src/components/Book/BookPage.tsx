import { urlFor } from "@/cms/client";
import useBooks from "@/hooks/useBooks";
import { Book as BookType } from "@/redux/features/Books/BooksSlice";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "../../styles/Book.module.scss";
import Book from "../Books/Main/Book";

type BookPageProps = { book: any };

const BookPage: React.FC<BookPageProps> = ({ book }) => {
  const bookData: BookType = {
    id: book._id,
    name: book.name,
    category: book.category,
    description: book.description,
    price: book.price,
    slug: book.slug.current,
    image: urlFor(book.image).url(),
    available: book.available,
    topTrending: book.topTrending,
    newReleases: book.newReleases,
    format: book.format,
    rating: book.rating,
  };
  const { initialBooks } = useBooks();
  const relatedBooks = initialBooks.filter(
    (book) => book.category === bookData.category && book.id != bookData.id
  );
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.mainContainer_left}`}>
        <div className={`${styles.mainContainer_left_bookContainer}`}>
          <img
            className={`${styles.mainContainer_left_bookContainer_image}`}
            src={bookData.image}
            alt="book"
          />
          <h3 className={`${styles.mainContainer_left_bookContainer_name}`}>
            {bookData.name}
          </h3>
          <button
            className={`${styles.mainContainer_left_bookContainer_buyBtn}`}
          >
            Buy now <FiChevronRight />
          </button>
          <button
            className={`${styles.mainContainer_left_bookContainer_addBtn}`}
          >
            Add to cart
          </button>
        </div>
        <div className={`${styles.mainContainer_left_menuContainer}`}>
          <ul className={`${styles.mainContainer_left_menuContainer_menu}`}>
            <li
              className={`${styles.mainContainer_left_menuContainer_menu_item} ${styles.mainContainer_left_menuContainer_menu_item_active}`}
            >
              Description
            </li>
            <li
              className={`${styles.mainContainer_left_menuContainer_menu_item}`}
            >
              Author
            </li>
            <li
              className={`${styles.mainContainer_left_menuContainer_menu_item}`}
            >
              Reviews
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.mainContainer_middle}`}>
        <div className={`${styles.mainContainer_middle_container}`}>
          <h2 className={`${styles.mainContainer_middle_container_title}`}>
            Name
          </h2>
          <p
            className={`${styles.mainContainer_middle_container_content_bold}`}
          >
            {bookData.name}
          </p>
        </div>
        <div className={`${styles.mainContainer_middle_container}`}>
          <h2 className={`${styles.mainContainer_middle_container_title}`}>
            About
          </h2>
          <p className={`${styles.mainContainer_middle_container_content}`}>
            {bookData.description}
          </p>
        </div>
        <div className={`${styles.mainContainer_middle_container}`}>
          <h2 className={`${styles.mainContainer_middle_container_title}`}>
            Category
          </h2>
          <p className={`${styles.mainContainer_middle_container_content}`}>
            {bookData.category}
          </p>
        </div>
        <div className={`${styles.mainContainer_middle_container}`}>
          <h2 className={`${styles.mainContainer_middle_container_title}`}>
            Language
          </h2>
          <p className={`${styles.mainContainer_middle_container_content}`}>
            English
          </p>
        </div>
        <div className={`${styles.mainContainer_middle_container}`}>
          <h2 className={`${styles.mainContainer_middle_container_title}`}>
            Type
          </h2>
          <p className={`${styles.mainContainer_middle_container_content}`}>
            {bookData.format}
          </p>
        </div>
      </div>
      <div className={`${styles.mainContainer_right}`}>
        <h2 className={`${styles.mainContainer_right_title}`}>Related Books</h2>
        <div className={`${styles.mainContainer_right_container}`}>
          {relatedBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BookPage;
