import React from "react";
import styles from "../../styles/About.module.scss";
import Follow from "./Follow";
import OurNextStep from "./OurNextStep";
import OurStory from "./OurStory";
import Team from "./Team";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className={`${styles.about}`}>
      <OurStory />
      <OurNextStep />
      <Team />
      <Follow />
    </div>
  );
};
export default About;
