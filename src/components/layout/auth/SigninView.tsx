import AuthInput from "@/components/common/auth/AuthInput";
import React, { ChangeEvent, useState } from "react";

type UserKey = "userId" | "userPassword";

type RecordUser = Record<UserKey, string>;

const SigninView = () => {
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
      <AuthInput
        title="아아디"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={userInfo.userId}
        changeValueHandler={ChangeUserIdHandler}
      />
      <AuthInput
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={userInfo.userPassword}
        changeValueHandler={ChangeUserPasswordHandler}
      />
    </>
  );
};

export default SigninView;
