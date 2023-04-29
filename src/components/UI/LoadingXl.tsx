import React from "react";
import { FiLoader } from "react-icons/fi";
import UI from "../../styles/UI.module.scss";
type LoadingXlProps = {};

const LoadingXl: React.FC<LoadingXlProps> = () => {
  return (
    <div className={`${UI.loadingXl}`}>
      <FiLoader />
    </div>
  );
};
export default LoadingXl;
