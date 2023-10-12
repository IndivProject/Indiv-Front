import React from "react";
import * as S from "@/styles/Auth.style";
import SigninView from "./SigninView";
import SignupView from "./SignupView";
import IndivLogo from "@/../public/asset/IndivLogo.svg";
import Image from "next/image";
interface ICheckSignInProps {
  isSignIn: boolean;
}

const AuthView = (props: ICheckSignInProps) => {
  return (
    <S.MainAuthForm>
      {props.isSignIn ? (
        <SigninView>
          <>
            <Image src={IndivLogo} alt="dfdf" />
            <S.AuthTitleContext>모든 작가님들의 공간</S.AuthTitleContext>
          </>
        </SigninView>
      ) : (
        <SignupView>
          <>
            <Image src={IndivLogo} alt="dfdf" />
            <S.AuthTitleContext>모든 작가님들의 공간</S.AuthTitleContext>
          </>
        </SignupView>
      )}
    </S.MainAuthForm>
  );
};

export default AuthView;
