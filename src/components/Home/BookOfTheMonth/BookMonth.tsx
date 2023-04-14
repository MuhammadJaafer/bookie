import React from "react";
import UI from "../../../styles/UI.module.scss";
import styles from "../../../styles/Home.module.scss";
import bookImg from "../../../../public/images/book.png";
import Image from "next/image";
type BookMonthProps = {};

const BookMonth: React.FC<BookMonthProps> = () => {
  return (
    <div className={`${styles.book}`}>
      <div className={`${styles.book_left}`}>
        <h1 className={`${styles.book_left_title}`}>book of the month</h1>
        <div className={`${styles.book_left_text}`}>
          <h2 className={`${styles.book_left_text_title}`}>ALL ABOUT YVES</h2>
          <p className={`${styles.book_left_text_para}`}>
            FULL OF BEAUTIFUL AND FASCINATING INSERTS, THIS BOOK INVITES yOU TO
            EWSCOVER THE LIFE AND WORK OF YVES SAINT IAURENT, THE MOST FAMOUS
            AND CELEBRATED COUTURIER IN THE WORLD, A GENIUS WHO USED HIS TALENTS
            TO SERVE WOMEN. THE CENTRAL THEmps OF HIS CAREER ARE EXPLORED: HIS
            BEGINNINGS AT CHRISTIAN DIOR, THE LAUNCH OF THE TUXEDO, HIS TRIBUTE
            COLLECTIONS TO ARTISFS AND WRITERS, HIS COSTUMES FOR THE THEATRE,
            THE PERSONAL GREETING CARDS HE DESIGNED, AND THE EXHIBITIONS AND
            SPECTACULARLY STAGED PUBLIC COUTURE SHOWS DEVOTED TO HIS CREATIONS.
            THE BOOK ALSO TELLS THE STORY OF THE UNIQUE RELATIONSHIP BETWEEN
            YVES SAINT LAURENT AND p.m mast, THE COUTURE HOUSE THEY CREATED IN
            1961, WHICH pAPIDEY.BECANIE AN EMPIRE, AND THE REMARKABLE PRIVATE
            ART COLLECTION THEY AMASSED OVER THE YEARS. ALL ABOUT YVES CONTAINS
            A WEALTH OF IMAGES AND MANY FACSIMILES OF PREVIOUSLY UNPUBLISHED
            DOCUMENTS, INCLUDING LMERS, ORIGINAL SKEICHES AND CONTACE SHEETS,
            GIVING A COMPREHENSIVE OVERVIEW OF THE LIFE AND ACHIEVEMENTS OF ONE
            OF THE GREATEST ARTISTS OF THE TWENTIEFH CENTURY.
          </p>
        </div>
      </div>
      <div className={`${styles.book_right}`}>
        <div className={`${styles.book_right_container}`}>
          <Image
            className={`${styles.book_right_container_img}`}
            src={bookImg}
            alt={"book"}
          />
        </div>
      </div>
    </div>
  );
};
export default BookMonth;
