import styled from "styled-components";

export const MainInputContainer = styled.div`
  margin-bottom: 10px;
`;

export const InputElement = styled.input`
  width: 300px;
  max-width: 300px;
  padding: 0.75rem 0.9rem;
  box-sizing: border-box;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.Gray300};
  color: ${({ theme }) => theme.Gray500};
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.Gray300};
  }
`;

export const InputTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
