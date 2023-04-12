import React from "react";
import styles from "../../../../styles/AuthModal.module.scss";
import googleIcon from "../../../../../public/images/google-logo.png";
import Image from "next/image";
type OtherProviderProps = {};

const OtherProvider: React.FC<OtherProviderProps> = () => {
  return (
    <div className={`${styles.modal_right_otherProvider}`}>
      <div className={`${styles.modal_right_otherProvider_or}`}>
        <div className={`${styles.modal_right_otherProvider_or_line}`}></div>
        <span className={`${styles.modal_right_otherProvider_or_text}`}>
          or
        </span>
        <div className={`${styles.modal_right_otherProvider_or_line}`}></div>
      </div>
      <div className={`${styles.modal_right_otherProvider_google}`}>
        <Image
          src={googleIcon}
          alt="google"
          className={`${styles.modal_right_otherProvider_google_img}`}
        />
        Sign in with Google
      </div>
    </div>
  );
};
export default OtherProvider;
