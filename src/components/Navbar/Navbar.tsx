"use client";
import { HideNav, ToggleNav } from "@/redux/features/Navbar/NavSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Navbar.module.scss";
import Right from "./Right";
import SignIn from "./SignIn";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [mobile, setMobile] = useState(false);
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.Nav.open);
  //stop scrolling
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
      document.documentElement.style.overflowY = "visible";
    }
  }, [show]);

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
    <>
      <nav className={`${styles.navbar}`}>
        <div className={`${styles.navbar_left}`}>
          <Link href={"/"}>
            <h1 className={`${styles.navbar_left_logo}`}>bookie</h1>
          </Link>
        </div>
        <Right />
        {mobile && (
          <div
            onClick={() => {
              dispatch(ToggleNav());
            }}
            className={`${styles.navbar_menuBtn}`}
          >
            {show ? <FiX /> : <FiMenu />}
          </div>
        )}
      </nav>
      {mobile && show && (
        <div
          onClick={() => {
            dispatch(HideNav());
          }}
          className={`${styles.overlay}`}
        ></div>
      )}
    </>
  );
};
export default Navbar;
