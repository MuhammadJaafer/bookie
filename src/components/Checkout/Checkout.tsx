"use client";
import { auth } from "@/firebase/config";
import { redirect } from "next/navigation";

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "../../styles/Checkout.module.scss";
import CheckoutCart from "./CheckoutCart";
import Payment from "./Payment";
import Shipping from "./Shipping";
type CheckoutProps = {};

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <div className={`${styles.checkout}`}>
      <div className={`${styles.checkout_forms}`}>
        <Shipping />
        <Payment />
      </div>
      <div className={`${styles.checkout_cart}`}>
        <CheckoutCart />
      </div>
    </div>
  );
};
export default Checkout;
