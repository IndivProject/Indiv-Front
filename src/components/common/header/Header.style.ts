import Link from "next/link";
import styled from "styled-components";

export const LinkInitialization = `
color: black;
text-decoration: none;
`;

export const MainHeader = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
`;

export const Logo = styled(Link)`
  ${LinkInitialization};
`;

export const CotentsWrap = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentsContext = styled(Link)`
  ${LinkInitialization}
`;
