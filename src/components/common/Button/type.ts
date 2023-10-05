import type { ButtonHTMLAttributes } from "react";

export type ButtonColorType = "unActive" | "Active" | "empty";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>;
  hover?: boolean;
  radius?: string;
  disable?: boolean;
  width?: string | null;
  height?: string | null;
  color?: ButtonColorType;
}
