import React, { useState } from "react";
import UI from "../../../styles/UI.module.scss";
import styles from "../../../styles/AuthModal.module.scss";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  switchToResetPassword,
  switchToSignup,
} from "@/redux/features/AuthModal/AuthModalSlice";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { FiAlertCircle, FiLoader } from "react-icons/fi";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [TogglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("handleSubmit Login page error", error);
    }
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${styles.modal_right_form}`}
    >
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
      <div>
        <label className={`${styles.modal_right_form_label}`}>
          Password
          <div className={`${styles.modal_right_form_PasswordContainer}`}>
            <input
              className={`${styles.modal_right_form_input}`}
              type={TogglePassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
      {/* form Error */}
      {error && (
        <div className={`${styles.modal_right_form_error}`}>
          <FiAlertCircle /> {error?.message}
        </div>
      )}
      <div className={`${styles.modal_right_form_buttonContainer}`}>
        <button className={`${UI.authBtn}`}>
          {loading ? <FiLoader /> : "Sign In"}
        </button>
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
