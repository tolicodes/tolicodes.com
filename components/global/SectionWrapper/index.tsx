import React from "react";
import { Container, Title } from "./styled";

interface SectionWrapperProps {
  title: string;
  container?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  container = false,
  children,
}) => {
  return (
    <Container container={container}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default SectionWrapper;
