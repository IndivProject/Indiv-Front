import Header from "@/components/common/header/Header";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const _document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
