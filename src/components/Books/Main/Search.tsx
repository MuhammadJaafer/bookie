"use client";
import { toggleFilter } from "@/redux/features/Filter/FilterSlice";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/Books.module.scss";
type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState(false);

  const show = useSelector((state: RootState) => state.Filter.show);
  useEffect(() => {
    //initial check
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobile]);
  return (
    <div className={`${styles.main_search}`}>
      {mobile && (
        <div
          onClick={() => {
            dispatch(toggleFilter());
          }}
          className={`${styles.main_search_filter}`}
        >
          Filter
        </div>
      )}
      <input type="text" placeholder="Search" />
      <HiMagnifyingGlass />
    </div>
  );
};
export default Search;
