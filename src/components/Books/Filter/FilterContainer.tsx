import React from "react";
import styles from "../../../styles/Books.module.scss";
import Category from "./Category";
import Format from "./Format";
import PriceRange from "./PriceRange";
import Rate from "./Rate";

type FilterContainerProps = {};

const FilterContainer: React.FC<FilterContainerProps> = () => {
  return (
    <div className={`${styles.filter}`}>
      <Category />
      <PriceRange />
      <Rate />
      <Format />
    </div>
  );
};
export default FilterContainer;
