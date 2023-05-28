import Image from "next/image";
import React from "react";
import muhammadImage from "../../../public/images/muhammad.jpg";
import saifImage from "../../../public/images/saif.jpeg";
import wisamImage from "../../../public/images/wisam.jpeg";
import styles from "../../styles/About.module.scss";
type TeamProps = {};

const Team: React.FC<TeamProps> = () => {
  return (
    <div className={`${styles.team}`}>
      <h1 className={`${styles.team_title}`}>Meet our team</h1>
      <div className={`${styles.team_container}`}>
        <div className={`${styles.team_container_item}`}>
          <Image
            className={`${styles.team_container_item_img}`}
            src={saifImage}
            alt={"image"}
          />
          <h3 className={`${styles.team_container_item_name}`}>saif btoush</h3>
          <h4 className={`${styles.team_container_item_role}`}>
            UI / UX Designer
          </h4>
        </div>
        <div className={`${styles.team_container_item}`}>
          <Image
            className={`${styles.team_container_item_img}`}
            src={muhammadImage}
            alt={"image"}
          />
          <h3 className={`${styles.team_container_item_name}`}>
            muhammad jaafar
          </h3>
          <h4 className={`${styles.team_container_item_role}`}>
            Web Developer
          </h4>
        </div>
        {/* <div className={`${styles.team_container_item}`}>
          <Image
            className={`${styles.team_container_item_img}`}
            src={wisamImage}
            alt={"image"}
          />
          <h3 className={`${styles.team_container_item_name}`}>wisam azzam</h3>
          <h4 className={`${styles.team_container_item_role}`}>
            Content Moderator & Developer
          </h4>
        </div> */}
      </div>
    </div>
  );
};
export default Team;
