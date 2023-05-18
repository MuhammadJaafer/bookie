import React from "react";
import styles from "../../styles/About.module.scss";
type AboutUsProps = {};

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <div className={`${styles.aboutUs}`}>
      <div className={`${styles.aboutUs_left}`}>
        <h1 className={`${styles.aboutUs_left_title}`}>About Us</h1>
      </div>
      <div className={`${styles.aboutUs_mid}`}>
        <p className={`${styles.aboutUs_mid_para}`}>
          Welcome to bookie, your go-to destination for all things books. At
          bookie, we&apos;re passionate about reading and we believe that great
          books have the power to inspire, educate, and entertain. That&apos;s
          why we&apos;ve created a platform that brings together a vast
          selection of books from every genre and style, making it easy for you
          to find your next favorite read. Whether you&apos;re a lifelong
          bookworm or just discovering the joy of reading, bookie has something
          for everyone. Our library of books includes everything from timeless
          classics to the latest bestsellers, and we&apos;re constantly adding
          new titles to keep your reading list fresh and exciting. At bookie, we
          understand that reading is more than just a pastime - it&apos;s a way
          of life. That&apos;s why we&apos;re committed to providing a platform
          that fosters a community of readers from around the world.
        </p>
      </div>
      <div className={`${styles.aboutUs_right}`}></div>
    </div>
  );
};
export default AboutUs;
