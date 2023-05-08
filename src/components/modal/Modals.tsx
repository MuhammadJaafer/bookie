"use client";
import { auth } from "@/firebase/config";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthModal from "./Auth/AuthModal";

type ModalsProps = {};

const Modals: React.FC<ModalsProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return <>{!user && <AuthModal />}</>;
};
export default Modals;
