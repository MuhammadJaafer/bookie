"use client";
import React from "react";
import AuthModal from "./Auth/AuthModal";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

type ModalsProps = {};

const Modals: React.FC<ModalsProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return <>{!user && <AuthModal />}</>;
};
export default Modals;
