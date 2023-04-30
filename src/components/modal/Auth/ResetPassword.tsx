import { auth } from "@/firebase/config";
import {
  switchToLogin,
  switchToResetPassword,
  switchToSignup,
} from "@/redux/features/AuthModal/AuthModalSlice";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { FiAlertCircle, FiLoader } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useDispatch } from "react-redux";
import styles from "../../../styles/AuthModal.module.scss";
import UI from "../../../styles/UI.module.scss";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, loading, error] =
    useSendPasswordResetEmail(auth);
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${styles.modal_right_form}`}
    >
      {success ? (
        <div className={`${styles.modal_right_form_success}`}>
          <span className={`${styles.modal_right_form_success_text}`}>
            We have send a password reset link to:
          </span>
          <span className={`${styles.modal_right_form_success_email}`}>
            {email}
          </span>
        </div>
      ) : (
        <>
          <label className={`${styles.modal_right_form_label}`}>
            Email
            <input
              className={`${styles.modal_right_form_input}`}
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </label>

          {/* form Error */}
          {error && (
            <div className={`${styles.modal_right_form_error}`}>
              <FiAlertCircle /> {error?.message}
            </div>
          )}
          <div className={`${styles.modal_right_form_buttonContainer}`}>
            <button className={`${UI.authBtn}`}>
              {loading ? <FiLoader /> : "Reset Password"}
            </button>
          </div>
        </>
      )}

      <div className={`${UI.ValignArrow}`}>
        <HiOutlineArrowNarrowLeft />
        <span
          onClick={() => {
            dispatch(switchToLogin());
          }}
          className={`${UI.secondaryText} ${styles.modal_right_form_buttonContainer_signup}`}
        >
          Back to Sign in
        </span>
      </div>
    </form>
  );
};
export default ResetPassword;
