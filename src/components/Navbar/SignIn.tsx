"use client";
import Link from "next/link";
import React from "react";
import UI from "../../styles/UI.module.scss";
import { useDispatch } from "react-redux";
import { ToggleModal } from "@/redux/features/AuthModal/AuthModalSlice";
type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Link
        href={"/"}
        onClick={() => {
          dispatch(ToggleModal());
        }}
      >
        <button className={`${UI.btn}`}>Sign in</button>
      </Link>
    </>
  );
};
export default SignIn;
