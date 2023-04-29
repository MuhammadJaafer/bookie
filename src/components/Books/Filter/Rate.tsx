import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../../styles/Books.module.scss";
type RateProps = {};

const Rate: React.FC<RateProps> = () => {
  return (
    <div className={`${styles.filter_rate}`}>
      <h2 className={`${styles.filter_rate_title}`}>Rate</h2>
      <div className={`${styles.filter_rate_starsContainer}`}>
        <div className={`${styles.filter_rate_starsContainer_stars}`}>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
        </div>
        <div className={`${styles.filter_rate_starsContainer_stars}`}>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
        </div>
        <div className={`${styles.filter_rate_starsContainer_stars}`}>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
        </div>
        <div className={`${styles.filter_rate_starsContainer_stars}`}>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
        </div>
        <div className={`${styles.filter_rate_starsContainer_stars}`}>
          <div
            className={`${styles.filter_rate_starsContainer_stars_star_active}`}
          >
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
          <div className={`${styles.filter_rate_starsContainer_stars_star}`}>
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rate;
