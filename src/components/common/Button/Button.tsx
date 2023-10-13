import React from "react";
import { SubmitBtn } from "./style";
import { IButtonProps } from "./type";

const Button = ({
  clickEvent,
  hover,
  active,
  width,
  height,
  radius,
  disable,
  color,
  padding,
  margin,
  children,
  ...buttonProps
}: IButtonProps) => {
  return (
    <SubmitBtn
      width={width}
      height={height}
      hover={hover}
      radius={radius}
      margin={margin}
      padding={padding}
      color={color ? color : "unActive"}
      onClick={disable ? undefined : clickEvent}
      {...buttonProps}
    >
      {children}
    </SubmitBtn>
  );
};

export default Button;
