"use client";
import { HideNav } from "@/redux/features/Navbar/NavSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Navbar.module.scss";
import SignIn from "./SignIn";

type RightProps = {};

const Right: React.FC<RightProps> = () => {
  const show = useSelector((state: RootState) => state.Nav.open);
  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.navbar_right} ${
        show ? styles.navbar_right_active : ""
      }`}
    >
      <div className={`${styles.navbar_right_container}`}>
        <Link
          onClick={() => {
            dispatch(HideNav());
          }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            dispatch(HideNav());
          }}
          href={"/books"}
        >
          Books
        </Link>
        <Link
          onClick={() => {
            dispatch(HideNav());
          }}
          href={"/about"}
        >
          About Us
        </Link>
        <SignIn />
      </div>
    </div>
  );
};
export default Right;
