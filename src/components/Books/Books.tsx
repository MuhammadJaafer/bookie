import React from "react";
import styles from "../../styles/Books.module.scss";
import FilterContainer from "./Filter/FilterContainer";
import MainContainer from "./Main/MainContainer";
type BooksProps = {};

const Books: React.FC<BooksProps> = () => {
  return (
    <div className={`${styles.books}`}>
      <FilterContainer />
      <MainContainer />
    </div>
  );
};
export default Books;
