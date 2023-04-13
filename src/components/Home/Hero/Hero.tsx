import React from "react";
import UI from "../../../styles/UI.module.scss";
import styles from "../../../styles/Home.module.scss";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.hero_text}`}>
        <h1>A book lover&apos;s paradise.</h1>
        <h4>
          Enter a world of endless possibilities with our collection of books
          that ignite your imagination
        </h4>
        <button className={`${UI.btn_round}`}>Start Your Journey</button>
      </div>
      <div className={`${styles.hero_circle1}`}></div>
      <div className={`${styles.hero_circle2}`}></div>
    </div>
  );
};
export default Hero;
