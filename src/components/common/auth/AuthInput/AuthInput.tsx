import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import * as S from "./AuthInput.style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  changeValueHandler: (
    inputOnchangeValue: ChangeEvent<HTMLInputElement>
  ) => void;
  value: string;
  width?: string;
  children?: ReactElement;
}

const AuthInput = ({
  type,
  placeholder,
  changeValueHandler,
  value,
  children,
  width,
  ...props
}: IInputProps) => {
  return (
    <S.MainInputContainer width={width}>
      <S.InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValueHandler}
        {...props}
      />
      {children}
    </S.MainInputContainer>
  );
};

export default AuthInput;
