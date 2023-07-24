import React from "react";
import SearchIcon from "@/asset/searchIcon.svg";
import * as S from "./style";

const Search = () => {
  return (
    <S.MainLayout>
      <S.SearchIcon src={SearchIcon} alt="" />
      <S.SerachInput type="text" />
    </S.MainLayout>
  );
};

export default Search;
