import React from "react";
import styles from "../../styles/About.module.scss";
import OurStory from "./OurStory";
import OurNextStep from "./OurNextStep";
import Team from "./Team";
import Follow from "./Follow";

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
