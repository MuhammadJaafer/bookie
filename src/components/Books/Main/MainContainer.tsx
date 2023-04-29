import React from "react";
import styles from "../../../styles/Books.module.scss";
import BooksContainer from "./BooksContainer";
import Search from "./Search";
type MainContainerProps = {};

const MainContainer: React.FC<MainContainerProps> = () => {
  return (
    <div className={`${styles.main}`}>
      <Search />
      <BooksContainer />
    </div>
  );
};
export default MainContainer;
