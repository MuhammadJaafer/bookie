"use client";
import { auth } from "@/firebase/config";
import { ToggleModal } from "@/redux/features/AuthModal/AuthModalSlice";
import { openCart } from "@/redux/features/Cart/CartSlice";
import { HideNav } from "@/redux/features/Navbar/NavSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { FiLoader, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import UI from "../../styles/UI.module.scss";
type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const cartState = useSelector((state: RootState) => state.Cart);

  return (
    <>
      {user ? (
        <>
          <button
            className={`${UI.btn}`}
            onClick={() => {
              signOut();
              dispatch(HideNav());
            }}
          >
            {loading ? <FiLoader /> : "Log out"}
          </button>
          <div
            onClick={() => {
              dispatch(openCart());
              dispatch(HideNav());
            }}
            className={`${UI.cartIcon}`}
          >
            <div>{cartState.numberOfProducts}</div>
            <FiShoppingCart />
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(ToggleModal());
            dispatch(HideNav());
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
