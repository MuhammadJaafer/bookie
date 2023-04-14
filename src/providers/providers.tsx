"use client";

import { store } from "@/redux/store/store";
import { Provider as ReduxProvider } from "react-redux";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </>
  );
};
export default Providers;
