import Button from "@/components/common/Button/Submit";
import AuthInput from "@/components/common/auth/AuthInput";
import React, { ChangeEvent, useState } from "react";
import IndivLogo from "@/asset/IndivLogo.svg";
import Image from "next/image";

type UserKey = "userId" | "userPassword";

type RecordUser = Record<UserKey, string>;

const SigninView = ({ children }: { children: React.ReactElement }) => {
  const [userInfo, setUserInfo] = useState<RecordUser>({
    userId: "",
    userPassword: "",
  });

  const ChangeUserIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, userId: e.target.value });
  };

  const ChangeUserPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, userPassword: e.target.value });
  };

  return (
    <>
      <Image src={IndivLogo} alt="" />
      {children}
      <AuthInput
        type="text"
        placeholder="아이디를 입력해주세요."
        value={userInfo.userId}
        changeValueHandler={ChangeUserIdHandler}
      />
      <AuthInput
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={userInfo.userPassword}
        changeValueHandler={ChangeUserPasswordHandler}
      />
      <Button radius="10px" hover width="200px" height="40px">
        로그인
      </Button>
    </>
  );
};

export default SigninView;
