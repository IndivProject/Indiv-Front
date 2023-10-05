import React, { ChangeEvent, InputHTMLAttributes } from "react";
import * as S from "./AuthInput.style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  changeValueHandler: (
    inputOnchangeValue: ChangeEvent<HTMLInputElement>
  ) => void;
  value: string;
}

const AuthInput = ({
  type,
  placeholder,
  changeValueHandler,
  value,
  ...props
}: IInputProps) => {
  return (
    <S.MainInputContainer>
      <S.InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
        {...props}
      />
    </S.MainInputContainer>
  );
};

export default AuthInput;
