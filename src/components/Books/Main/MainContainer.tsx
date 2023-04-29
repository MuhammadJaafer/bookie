import React from "react";
import styles from "../../../styles/Books.module.scss";
import BooksContainer from "./BooksContainer";
import Search from "./Search";
type MainContainerProps = {};

const MainContainer = () => {
  return (
    <div className={`${styles.main}`}>
      <Search />
      {/* @ts-expect-error Async Server Component */}
      <BooksContainer />
    </div>
  );
};
export default MainContainer;
