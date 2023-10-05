import styled, { css } from "styled-components";
import type { FlattenInterpolation, ThemeProps } from "styled-components";
import type { IButtonProps, ButtonColorType } from "./type";
import type { ThemeType } from "@/types/Themetype";

const getColor: Record<
  ButtonColorType,
  FlattenInterpolation<ThemeProps<ThemeType>>
> = {
  unActive: css`
    background-color: ${({ theme }) => theme.PersonalGreen200};
    color: white;
  `,
  Active: css`
    background-color: ${({ theme }) => theme.PersonalGreen300};
    color: white;
  `,
  empty: css`
    background-color: white;
    color: ${({ theme }) => theme.PersonalGreen200};
    border: ${({ theme }) => `2px solid ${theme.PersonalGreen200}`};
  `,
};

export const SubmitBtn = styled.button<IButtonProps>`
  ${({ color }) => color && getColor[color]};
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ height }) => height};
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ radius }) => radius};
  border: none;
  &:hover {
    ${({ hover }) => hover && getColor["Active"]}
  }
`;
