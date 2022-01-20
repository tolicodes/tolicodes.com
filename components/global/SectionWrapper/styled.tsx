import styled from "styled-components";

interface ContainerProps {
  container: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #272727;
`;

interface TitleProps {}
export const Title = styled.h1<TitleProps>`
  color: white;
  font-family: "PT Mono", monospace;
  text-align: center;
  font-size: 24px;
  margin: 20px;
`;