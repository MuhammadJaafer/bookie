import React, { useState } from "react";
import UI from "../../../../styles/UI.module.scss";
import styles from "../../../../styles/AuthModal.module.scss";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  switchToResetPassword,
  switchToSignup,
} from "@/redux/features/AuthModal/AuthModalSlice";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [TogglePassword, setTogglePassword] = useState(false);
  const dispatch = useDispatch();
  return (
    <form className={`${styles.modal_right_form}`}>
      <label className={`${styles.modal_right_form_label}`}>
        Email
        <input
          className={`${styles.modal_right_form_input}`}
          type="email"
          name="email"
          required
        />
      </label>
      <div>
        <label className={`${styles.modal_right_form_label}`}>
          Password
          <div className={`${styles.modal_right_form_PasswordContainer}`}>
            <input
              className={`${styles.modal_right_form_input}`}
              type={TogglePassword ? "text" : "password"}
              name="password"
              required
            />
            <div
              onClick={() => {
                setTogglePassword((prev) => !prev);
              }}
              className={`${styles.modal_right_form_TogglePassword}`}
            >
              {TogglePassword ? <RxEyeOpen /> : <RxEyeClosed />}
            </div>
          </div>
        </label>
        <h3
          className={`${UI.secondaryText} ${styles.modal_right_form_forgetPassword}`}
          onClick={() => {
            dispatch(switchToResetPassword());
          }}
        >
          Forget Password?
        </h3>
      </div>
      <div className={`${styles.modal_right_form_buttonContainer}`}>
        <button className={`${UI.authBtn}`}>Sign In</button>
        <div className={`${UI.blackText}`}>
          Don&apos;t have an account?{" "}
          <span
            onClick={() => {
              dispatch(switchToSignup());
            }}
            className={`${UI.secondaryText} ${styles.modal_right_form_buttonContainer_signup}`}
          >
            Sign up
          </span>
        </div>
      </div>
    </form>
  );
};
export default Login;
