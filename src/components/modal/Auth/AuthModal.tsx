"use client";
import {
  AuthModalState,
  HideModal,
  ToggleModal,
} from "@/redux/features/AuthModal/AuthModalSlice";
import { RootState, store } from "@/redux/store/store";
import React from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/AuthModal.module.scss";
import Form from "./Form";
import OtherProvider from "./OtherProvider";
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
            dispatch(HideModal());
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
              <>
                <h1>We Got your back</h1>
                <h3>No worries, we’ll send you reset instructions.</h3>
              </>
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
          {AuthModal.view != "resetPassword" && <OtherProvider />}
        </div>
      </div>
      <div
        onClick={() => dispatch(HideModal())}
        className={`${styles.modal_overlay}`}
      ></div>
    </div>
  );
};
export default AuthModal;
