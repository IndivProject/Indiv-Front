import React, { useState } from "react";
import IndivLogo from "@/asset/IndivLogo.svg";
import * as S from "./Header.style";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  return (
    <S.MainHeader>
      <S.Logo href={"/"}>Logo</S.Logo>
      <div>
        {isSignIn ? (
          <p>검색</p>
        ) : (
          <S.CotentsWrap>
            <S.ContentsContext href={"/auth/signin"}>SignIn</S.ContentsContext>
            <S.ContentsContext href={"/auth/signup"}>SignUp</S.ContentsContext>
          </S.CotentsWrap>
        )}
      </div>
    </S.MainHeader>
  );
};

export default Header;
