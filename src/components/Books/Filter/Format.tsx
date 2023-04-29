import React from "react";
import styles from "../../../styles/Books.module.scss";
type FormatProps = {};

const Format: React.FC<FormatProps> = () => {
  return (
    <div className={`${styles.filter_format}`}>
      <h2 className={`${styles.filter_format_title}`}>Format</h2>
      <ul className={`${styles.filter_format_list}`}>
        <li className={`${styles.filter_format_list_item}`}>HardCover</li>
        <li className={`${styles.filter_format_list_item}`}>Paperback</li>
        <li className={`${styles.filter_format_list_item}`}>E-Book</li>
        <li className={`${styles.filter_format_list_item}`}>AudioBook</li>
      </ul>
    </div>
  );
};
export default Format;
