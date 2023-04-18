import React from "react";
import styles from "../../styles/About.module.scss";
import Image from "next/image";
import PhoneImage from "../../../public/images/phone.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
type FollowProps = {};

const Follow: React.FC<FollowProps> = () => {
  return (
    <div className={`${styles.follow}`}>
      <div className={`${styles.follow_left}`}>
        <h1 className={`${styles.follow_left_title}`}>Follow Us</h1>
        <div className={`${styles.follow_left_container}`}>
          <a href="#">
            <div className={`${styles.follow_left_container_item}`}>
              <FaFacebookF />
              <h3 className={`${styles.follow_left_container_item_title}`}>
                bookie
              </h3>
            </div>
          </a>
          <a href="#">
            <div className={`${styles.follow_left_container_item}`}>
              <BsInstagram />
              <h3 className={`${styles.follow_left_container_item_title}`}>
                bookie
              </h3>
            </div>
          </a>
          <a href="#">
            <div className={`${styles.follow_left_container_item}`}>
              <FaTwitter />
              <h3 className={`${styles.follow_left_container_item_title}`}>
                bookie
              </h3>
            </div>
          </a>
        </div>
      </div>
      <div className={`${styles.follow_right}`}>
        <Image src={PhoneImage} alt={"phone"} />
      </div>
    </div>
  );
};
export default Follow;
