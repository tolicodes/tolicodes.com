import styled from "styled-components";

interface ContainerProps {
  container: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #272727;
`;
