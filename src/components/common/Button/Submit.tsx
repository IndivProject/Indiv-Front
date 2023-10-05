import React from "react";
import { SubmitBtn } from "./style";
import { IButtonProps } from "./type";

const Button = ({
  clickEvent,
  hover,
  width,
  height,
  radius,
  disable,
  color,
  children,
  ...buttonProps
}: IButtonProps) => {
  return (
    <SubmitBtn
      width={width}
      height={height}
      hover={hover}
      radius={radius}
      color={color ? color : "unActive"}
      onClick={disable ? undefined : clickEvent}
      {...buttonProps}
    >
      {children}
    </SubmitBtn>
  );
};

export default Button;
