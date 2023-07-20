import React from "react";
import * as S from "@/styles/Auth.style";
import SigninView from "./SigninView";
import SignupView from "./SignupView";

interface ICheckSignInProps {
  isSignIn: boolean;
}

const AuthView = (props: ICheckSignInProps) => {
  return (
    <S.MainAuthForm>
      <S.AuthTitleContext>
        {props.isSignIn ? "로그인" : "회원 가입"}
      </S.AuthTitleContext>
      {props.isSignIn ? <SigninView /> : <SignupView />}
    </S.MainAuthForm>
  );
};

export default AuthView;
