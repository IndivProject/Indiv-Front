import React, { ReactElement } from "react";
import Header from "../../header/Header";
import { Template } from "./style";

interface IDefaultTemplate {
  children: ReactElement;
}

const AuthTemplate = ({ children }: IDefaultTemplate) => {
  return (
    <>
      <Header />
      <Template>{children}</Template>
    </>
  );
};

export default AuthTemplate;
