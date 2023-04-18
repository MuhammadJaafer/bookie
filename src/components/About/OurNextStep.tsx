import React from "react";
import styles from "../../styles/About.module.scss";

type OurNextStepProps = {};

const OurNextStep: React.FC<OurNextStepProps> = () => {
  return (
    <div className={`${styles.nextStep}`}>
      <div className={`${styles.nextStep_left}`}>
        <h1 className={`${styles.nextStep_left_title}`}>Our next step</h1>
      </div>
      <div className={`${styles.nextStep_right}`}>
        <div className={`${styles.nextStep_right_container}`}>
          <div className={`${styles.nextStep_right_container_item}`}>
            <span>Host virtual book clubs:</span> We believe that reading is a
            communal experience, and what better way to foster that than by
            hosting virtual book clubs? We&apos;ll curate a selection of books
            each month and invite readers from around the world to join us for
            live discussions.
          </div>
          <div className={`${styles.nextStep_right_container_item}`}>
            <span>Launch a Bookie app:</span> We know that many readers prefer
            to access books from their mobile devices. That&apos;s why
            we&apos;re exploring the possibility of launching a Bookie app
            that&apos;s easy to use and makes discovering new reads even more
            convenient.
          </div>
          <div className={`${styles.nextStep_right_container_item}`}>
            <span>Collaborate with book bloggers and influencers:</span> We know
            that book bloggers and influencers have a huge following among book
            readers. By partnering with them, we can increase our reach and
            introduce Bookie to a wider audience.
          </div>
          <div className={`${styles.nextStep_right_container_item}`}>
            <span>Host author events:</span> We&apos;re passionate about
            connecting our readers with the authors they love. We&apos;ll
            organize virtual author events where readers can hear from their
            favorite writers, ask questions, and engage in discussions.
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurNextStep;
