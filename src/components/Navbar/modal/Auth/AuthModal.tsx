"use client";
import React from "react";
import styles from "../../../../styles/AuthModal.module.scss";
import { RootState, store } from "@/redux/store/store";
import {
  AuthModalState,
  ToggleModal,
} from "@/redux/features/AuthModal/AuthModalSlice";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import OtherProvider from "./OtherProvider";
import Form from "./Form";
type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const AuthModal: AuthModalState = useSelector(
    (state: RootState) => state.AuthModal
  );
  const dispatch = useDispatch();

  return (
    <div className={`${AuthModal.open ? styles.show : styles.hide}`}>
      <div className={`${styles.modal}`}>
        <div
          className={`${styles.modal_close}`}
          onClick={() => {
            dispatch(ToggleModal());
          }}
        >
          <FiX />
        </div>
        <div className={`${styles.modal_left}`}>
          <div className={`${styles.modal_left_text}`}>
            <h2>bookie</h2>
            {AuthModal.view === "login" && <h1>Welcome back!</h1>}
            {AuthModal.view === "signup" && (
              <>
                <h1>Join bookie and Start Reading Now!</h1>
                <h3>
                  Sign up for Bookie and get access to an incredible selection
                  of books.
                </h3>
              </>
            )}
            {AuthModal.view === "resetPassword" && (
              <h1>Don&apos;t worry We Got your back</h1>
            )}
          </div>
          <div className={`${styles.modal_left_circle1}`}></div>
          <div className={`${styles.modal_left_circle2}`}></div>
        </div>
        <div className={`${styles.modal_right}`}>
          <h2 className={`${styles.modal_right_title}`}>
            {AuthModal.view === "login" && "Sign in"}
            {AuthModal.view === "signup" && "Sign up"}
            {AuthModal.view === "resetPassword" && "Reset Password"}
          </h2>
          <Form />
          <OtherProvider />
        </div>
      </div>
      <div className={`${styles.modal_overlay}`}></div>
    </div>
  );
};
export default AuthModal;
