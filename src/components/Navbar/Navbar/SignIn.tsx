"use client";
import Link from "next/link";
import React from "react";
import UI from "../../../styles/UI.module.scss";
import { useDispatch } from "react-redux";
import { ToggleModal } from "@/redux/features/AuthModal/AuthModalSlice";
import { auth } from "@/firebase/config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FiLoader, FiShoppingCart } from "react-icons/fi";
type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      {user ? (
        <>
          <button
            className={`${UI.btn}`}
            onClick={() => {
              signOut();
            }}
          >
            {loading ? <FiLoader /> : "Log out"}
          </button>
          <div className={`${UI.cartIcon}`}>
            <div>{2}</div>
            <FiShoppingCart />
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(ToggleModal());
          }}
          className={`${UI.btn}`}
        >
          Sign in
        </button>
      )}
    </>
  );
};
export default SignIn;
