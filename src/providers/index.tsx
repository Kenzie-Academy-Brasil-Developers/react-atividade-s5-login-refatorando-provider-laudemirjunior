import { ReactNode } from "react";
import { AuthProvider } from "./auth";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
