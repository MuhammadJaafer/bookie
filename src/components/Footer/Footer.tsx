import React from "react";
import UI from "../../styles/UI.module.scss";
import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={`${styles.footer}`}>
      <h2 className={`${styles.footer_title}`}>bookie</h2>
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.footer_container_block}`}>
          <h3 className={`${styles.footer_container_block_title}`}>Company</h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <Link href={"/about"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div className={`${styles.footer_container_block}`}>
          <h3 className={`${styles.footer_container_block_title}`}>Books</h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                New Releases
              </li>
            </Link>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                Top Trending
              </li>
            </Link>
            <Link href={"/books"}>
              <li className={`${styles.footer_container_block_list_item}`}>
                View all categories
              </li>
            </Link>
          </ul>
        </div>
        <div className={`${styles.footer_container_block}`}>
          <h3 className={`${styles.footer_container_block_title}`}>
            follow us
          </h3>
          <ul className={`${styles.footer_container_block_list}`}>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                facebook
              </li>
            </a>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                instagram
              </li>
            </a>
            <a href="#">
              <li className={`${styles.footer_container_block_list_item}`}>
                twitter
              </li>
            </a>
          </ul>
        </div>
        <div className={`${styles.footer_container_block}`}>
          <h3 className={`${styles.footer_container_block_title}`}>
            contact us
          </h3>
          <form className={`${styles.footer_container_block_form}`}>
            <input
              className={`${styles.footer_container_block_form_input}`}
              type="email"
              name="email"
              placeholder="email"
            />
            <textarea
              className={`${styles.footer_container_block_form_textArea}`}
              name="message"
              cols={30}
              rows={6}
              placeholder="message"
            ></textarea>
            <button
              className={`${UI.smallBtn} ${styles.footer_container_block_form_btn}`}
            >
              send
            </button>
          </form>
        </div>
      </div>
      <div className={`${styles.footer_copyRight}`}>
        <div className={`${styles.footer_copyRight_line}`}></div>
        <div className={`${styles.footer_copyRight_text}`}>
          bookie, Inc 2023
        </div>
      </div>
    </div>
  );
};
export default Footer;
