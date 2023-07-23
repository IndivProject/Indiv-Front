import React from "react";
import { SubmitBtn } from "./style";

interface ISubmitButtonProps {
  OnclickHandler: () => void;
}

const Submit = (props: ISubmitButtonProps) => {
  return <SubmitBtn onClick={props.OnclickHandler}>Submit</SubmitBtn>;
};

export default Submit;
