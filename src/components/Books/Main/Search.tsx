import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "../../../styles/Books.module.scss";
type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return (
    <div className={`${styles.main_search}`}>
      <input type="text" placeholder="Search" />
      <HiMagnifyingGlass />
    </div>
  );
};
export default Search;
