import styled from "styled-components";

interface ICheckBoxContentsStlyeProps {
  margin?: string;
}

export const MainContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ margin }: ICheckBoxContentsStlyeProps) => margin};
`;
export const CheckBoxContentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  padding: 1rem;
`;

export const CheckBoxContext = styled.p`
  font-size: 16px;
  margin: ${({ margin }: ICheckBoxContentsStlyeProps) => margin};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.Gray300};
  margin: 1rem 0rem;
`;
