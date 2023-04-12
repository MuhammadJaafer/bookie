import { RootState } from "@/redux/store/store";
import { stat } from "fs";
import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const view = useSelector((state: RootState) => state.AuthModal.view);
  return (
    <>
      {view === "login" && <Login />}
      {view === "signup" && <Signup />}
    </>
  );
};
export default Form;
