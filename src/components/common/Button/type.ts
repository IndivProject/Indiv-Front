import type { ButtonHTMLAttributes } from "react";

export type ButtonColorType = "unActive" | "Active" | "Hover" | "empty";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>;
  hover?: boolean;
  active?: boolean;
  radius?: string;
  disable?: boolean;
  width?: string | null;
  height?: string | null;
  color?: ButtonColorType;
  padding?: string | null;
}
