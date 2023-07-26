import Post from "@/components/common/post/Post";
import Search from "@/components/common/search/Search";
import * as S from "./style";
import React from "react";

const MainView = () => {
  return (
    <S.MainFormContents>
      <Search />
      <Post />
    </S.MainFormContents>
  );
};

export default MainView;
