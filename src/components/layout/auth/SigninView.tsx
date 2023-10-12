import Button from "@/components/common/Button";
import AuthInput from "@/components/common/auth/AuthInput";
import React, { ChangeEvent, useState } from "react";

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
      <Button radius="10px" hover active width="200px" height="40px">
        로그인
      </Button>
      <p>계정이 없으신가요?</p>
      <p>비밀번호를 잊어버리셨나요?</p>
    </>
  );
};

export default SigninView;
