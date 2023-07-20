import React, { ChangeEvent } from "react";
import * as S from "./AuthInput.style";

interface IInputProps {
  title: string;
  type: string;
  placeholder: string;
  changeValueHandler: (
    inputOnchangeValue: ChangeEvent<HTMLInputElement>
  ) => void;
  value: string;
}

const AuthInput = (props: IInputProps) => {
  return (
    <S.MainInputContainer>
      <S.InputTitle>{props.title}</S.InputTitle>
      <S.InputElement
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changeValueHandler}
      />
    </S.MainInputContainer>
  );
};

export default AuthInput;
