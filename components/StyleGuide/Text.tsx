import styled from "styled-components";

interface TitleProps {}
export const Title = styled.h1<TitleProps>`
  color: white;
  font-family: "PT Mono", monospace;
  text-align: center;
  font-size: 24px;
  margin: 20px;
`;

interface TypeProps {}
export const Type = styled.p<TypeProps>`
  width: 100px;
  min-width: 100px;
  font-weight: bold;
  font-size: 14px;
`;
