"use client";
import useBooks from "@/hooks/useBooks";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "../../../styles/Books.module.scss";

type PaginationContainerProps = {};

const PaginationContainer: React.FC<PaginationContainerProps> = () => {
  const { numberOfPages, currentPage, HandleNextPage, HandlePrevPage } =
    useBooks();
  return (
    <div className={`${styles.pagination}`}>
      <div className={`${styles.pagination_container}`}>
        <div
          onClick={() => {
            HandlePrevPage();
          }}
          className={`${styles.pagination_container_icon}`}
        >
          <FiChevronLeft />
        </div>
        <div className={`${styles.pagination_container_numbers}`}>
          {currentPage > 1 && (
            <div className={`${styles.pagination_container_numbers_subNumber}`}>
              {currentPage - 1}
            </div>
          )}
          <div className={`${styles.pagination_container_numbers_mainNumber}`}>
            {currentPage}
          </div>
          {currentPage < numberOfPages && (
            <div className={`${styles.pagination_container_numbers_subNumber}`}>
              {currentPage + 1}
            </div>
          )}
        </div>
        <div
          className={`${styles.pagination_container_icon}`}
          onClick={() => {
            HandleNextPage();
          }}
        >
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};
export default PaginationContainer;
