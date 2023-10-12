import React, { Dispatch, SetStateAction } from "react";
import UnActive from "@/../public/asset/icon/checkbox/unActive.svg";
import Active from "@/../public/asset/icon/checkbox/active.svg";
import { CheckBoxIcon } from "./style";
interface ICheckBoxStyle {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  setAllTOSState?: Dispatch<SetStateAction<boolean>>;
}

const CheckBox = ({ state, setState, setAllTOSState }: ICheckBoxStyle) => {
  if (state)
    return (
      <CheckBoxIcon
        src={Active}
        alt="dfdf"
        onClick={() => {
          setState(false);
          if (setAllTOSState) setAllTOSState(false);
        }}
      />
    );
  else
    return (
      <CheckBoxIcon src={UnActive} alt="dfdf" onClick={() => setState(true)} />
    );
};

export default CheckBox;
