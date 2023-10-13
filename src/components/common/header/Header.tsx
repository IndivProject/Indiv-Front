import React, { useState } from "react";
import * as S from "./Header.style";
import IndivLogo from "@/../public/asset/IndivLogo.svg";
import Image from "next/image";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  return (
    <S.MainHeader>
      <S.Logo href={"/"}>
        <Image
          src={IndivLogo}
          alt=""
          style={{
            width: "100px",
          }}
        />
      </S.Logo>
      <div>
        {isSignIn ? (
          <p>검색</p>
        ) : (
          <S.CotentsWrap>
            <S.ContentsContext href={"/auth/signin"}>로그인</S.ContentsContext>
            <S.ContentsContext href={"/auth/signup"}>
              회원가입
            </S.ContentsContext>
          </S.CotentsWrap>
        )}
      </div>
    </S.MainHeader>
  );
};

export default Header;
