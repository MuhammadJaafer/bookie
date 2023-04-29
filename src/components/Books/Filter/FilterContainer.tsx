import React from "react";
import styles from "../../../styles/Books.module.scss";

type FilterContainerProps = {};

const FilterContainer: React.FC<FilterContainerProps> = () => {
  return <div className={`${styles.filter}`}></div>;
};
export default FilterContainer;
