import React from "react";
import styles from "../../../styles/Books.module.scss";

type CategoryProps = {};
const Categories = [
  "all",
  "romance",
  "science",
  "history",
  "fantasy",
  "horror",
  "thriller",
  "self help",
  "Medical & nursing",
  "technology",
];
const Category: React.FC<CategoryProps> = () => {
  return (
    <div className={`${styles.filter_categories}`}>
      <h2 className={`${styles.filter_categories_title}`}>Category</h2>
      <ul className={`${styles.filter_categories_list}`}>
        {Categories.map((category) => (
          <li className={`${styles.filter_categories_item}`} key={category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Category;
