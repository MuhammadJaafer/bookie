import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";
import SignIn from "./SignIn";

type RightProps = { show: boolean };

const Right: React.FC<RightProps> = ({ show }) => {
  return (
    <div
      className={`${styles.navbar_right} ${
        show ? styles.navbar_right_active : ""
      }`}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/books"}>Books</Link>
      <Link href={"/about"}>About Us</Link>
      <SignIn />
    </div>
  );
};
export default Right;
