import Image from "next/image";
import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 1rem;
  margin: 0rem auto;
  padding: 1rem;
  background-color: #e9e9e9;
  border-radius: 50rem;
`;

export const SearchIcon = styled(Image)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const SerachInput = styled.input`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  width: 92%;
  color: #555;
`;
