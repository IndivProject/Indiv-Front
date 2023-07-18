import React, { useState } from "react";
import * as S from "./Header.style";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  return (
    <S.MainHeader>
      <S.Logo>Logo</S.Logo>
      <div>
        {isSignIn ? (
          <p>검색</p>
        ) : (
          <>
            <p>SignIn</p>
            <p>SignUp</p>
          </>
        )}
      </div>
    </S.MainHeader>
  );
};

export default Header;
