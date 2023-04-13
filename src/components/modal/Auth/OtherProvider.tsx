import React from "react";
import styles from "../../../styles/AuthModal.module.scss";
import googleIcon from "../../../../public/images/google-logo.png";
import Image from "next/image";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
type OtherProviderProps = {};

const OtherProvider: React.FC<OtherProviderProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className={`${styles.modal_right_otherProvider}`}>
      <div className={`${styles.modal_right_otherProvider_or}`}>
        <div className={`${styles.modal_right_otherProvider_or_line}`}></div>
        <span className={`${styles.modal_right_otherProvider_or_text}`}>
          or
        </span>
        <div className={`${styles.modal_right_otherProvider_or_line}`}></div>
      </div>
      <div
        onClick={() => {
          signInWithGoogle();
        }}
        className={`${styles.modal_right_otherProvider_google}`}
      >
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
