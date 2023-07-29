import AuthInput from "@/components/common/auth/AuthInput";
import React, { ChangeEvent, useState } from "react";

type NewUserKey = "userId" | "userPassword" | "userPasswordCheck" | "userName";

type NewRecordUser = Record<NewUserKey, string>;

const SignupView = () => {
  const [newUserInfo, setNewUserInfo] = useState<NewRecordUser>({
    userId: "",
    userPassword: "",
    userPasswordCheck: "",
    userName: "",
  });

  const ChangeNewUserIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserInfo({ ...newUserInfo, userId: e.target.value });
  };
  const ChangeNewUserPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserInfo({ ...newUserInfo, userPassword: e.target.value });
  };
  const ChangeNewUserPasswordCheckHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNewUserInfo({ ...newUserInfo, userPasswordCheck: e.target.value });
  };
  const ChangeNewUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUserInfo({ ...newUserInfo, userName: e.target.value });
  };

  return (
    <>
      <AuthInput
        title="아이디"
        type="text"
        placeholder="새 아이디를 입력해주세요."
        value={newUserInfo.userId}
        changeValueHandler={ChangeNewUserIdHandler}
      />
      <AuthInput
        title="비밀번호"
        type="password"
        placeholder="새 비밀번호를 입력해주세요."
        value={newUserInfo.userPassword}
        changeValueHandler={ChangeNewUserPasswordHandler}
      />
      <AuthInput
        title="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요."
        value={newUserInfo.userPasswordCheck}
        changeValueHandler={ChangeNewUserPasswordCheckHandler}
      />
      <AuthInput
        title="이름"
        type="text"
        placeholder="사용하실 이름을 입력해주세요."
        value={newUserInfo.userName}
        changeValueHandler={ChangeNewUserNameHandler}
      />
    </>
  );
};

export default SignupView;
