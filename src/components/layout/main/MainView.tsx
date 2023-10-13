import Post from "@/components/common/post/Post";
import Search from "@/components/common/search/Search";
import * as S from "./style";
import React from "react";
import Main from "@/components/Main/Main";
import DefaultTemplate from "@/components/common/Template/DefaultTemplate/DefaultTemplate";

const MainView = () => {
  return (
    <DefaultTemplate>
      <Main />
    </DefaultTemplate>
  );
};

export default MainView;
