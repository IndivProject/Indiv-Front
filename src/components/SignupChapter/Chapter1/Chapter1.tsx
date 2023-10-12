import CheckBox from "@/components/common/CheckBox";
import React, { useEffect, useState } from "react";
import * as S from "./style";

const Chapter1 = () => {
  const [checkAlTOS, setCheckAllTOS] = useState<boolean>(false);
  const [checkUseService, setCheckUseService] = useState<boolean>(false);
  const [checkUserInfo, setCheckUserInfo] = useState<boolean>(false);
  const [checkUseUserYear, setCheckUseUserYear] = useState<boolean>(false);
  const [checkContact, setCheckContact] = useState<boolean>(false);
  useEffect(() => {
    if (checkAlTOS) {
      setCheckUseService(true);
      setCheckUserInfo(true);
      setCheckUseUserYear(true);
      setCheckContact(true);
    } else {
      setCheckUseService(false);
      setCheckUserInfo(false);
      setCheckUseUserYear(false);
      setCheckContact(false);
    }
  }, [checkAlTOS]);
  useEffect(() => {
    if (checkUseService && checkUserInfo && checkUseUserYear && checkContact)
      setCheckAllTOS(true);
  }, [checkUseService, checkUserInfo, checkUseUserYear, checkContact]);
  return (
    <S.MainContainer>
      <S.CheckBoxContainer>
        <S.CheckBoxContext margin="0rem 1rem 0rem 0rem">
          모두 동의
        </S.CheckBoxContext>
        <CheckBox state={checkAlTOS} setState={setCheckAllTOS} />
      </S.CheckBoxContainer>
      <S.CheckBoxContentsContainer>
        <S.CheckBoxContainer>
          <CheckBox
            state={checkAlTOS ? true : checkUseService}
            setState={setCheckUseService}
            setAllTOSState={setCheckAllTOS}
          />
          <S.CheckBoxContext margin="0rem 0rem 0rem 1rem">
            Indiv 서비스 이용 약관 동의
          </S.CheckBoxContext>
        </S.CheckBoxContainer>
      </S.CheckBoxContentsContainer>
      <S.CheckBoxContentsContainer>
        <S.CheckBoxContainer>
          <CheckBox
            state={checkAlTOS ? true : checkUserInfo}
            setState={setCheckUserInfo}
            setAllTOSState={setCheckAllTOS}
          />
          <S.CheckBoxContext margin="0rem 0rem 0rem 1rem">
            개인정보 수집 및 이용 동의
          </S.CheckBoxContext>
        </S.CheckBoxContainer>
      </S.CheckBoxContentsContainer>
      <S.CheckBoxContentsContainer>
        <S.CheckBoxContainer>
          <CheckBox
            state={checkAlTOS ? true : checkUseUserYear}
            setState={setCheckUseUserYear}
            setAllTOSState={setCheckAllTOS}
          />
          <S.CheckBoxContext margin="0rem 0rem 0rem 1rem">
            개인정보 유효기간 5년으로 설정
          </S.CheckBoxContext>
        </S.CheckBoxContainer>
      </S.CheckBoxContentsContainer>
      <S.Line />
      <S.CheckBoxContainer>
        <CheckBox
          state={checkAlTOS ? true : checkContact}
          setState={setCheckContact}
          setAllTOSState={setCheckAllTOS}
        />
        <S.CheckBoxContext margin="0rem 0rem 0rem 1rem">
          다양한 소식을 받으시겠습니까?
        </S.CheckBoxContext>
      </S.CheckBoxContainer>
    </S.MainContainer>
  );
};

export default Chapter1;
