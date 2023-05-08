import React from "react";
import styles from "../../../styles/Books.module.scss";
import BooksContainer from "./BooksContainer";
import PaginationContainer from "./PaginationContainer";
import Search from "./Search";
type MainContainerProps = {};

const MainContainer = () => {
  return (
    <div className={`${styles.main}`}>
      <Search />
      <BooksContainer />
      <PaginationContainer />
    </div>
  );
};
export default MainContainer;
