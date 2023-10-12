import styled from "styled-components";

interface IInputStyleProps {
  width?: string;
}

export const MainInputContainer = styled.div`
  margin-bottom: 10px;
  width: ${({ width }: IInputStyleProps) => (width ? width : "300px")};
  max-width: ${({ width }: IInputStyleProps) => (width ? width : "300px")};
  padding: 0.75rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.Gray300};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputElement = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  border: none;
  color: ${({ theme }) => theme.Gray500};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.Gray300};
  }
`;

export const InputTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
