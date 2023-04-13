import React from "react";
import styles from "../../../styles/Navbar.module.scss";
import Link from "next/link";
import SignIn from "./SignIn";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbar_right}`}>
        <Link href={"/"}>
          <h1 className={`${styles.navbar_right_logo}`}>bookie</h1>
        </Link>
      </div>
      <div className={`${styles.navbar_left}`}>
        <Link href={"/"}>Home</Link>
        <Link href={"/books"}>Books</Link>
        <Link href={"/about"}>About Us</Link>
        <SignIn />
      </div>
    </nav>
  );
};
export default Navbar;
