import React from "react";
import { Container } from "./styled";
import { Title } from "../../StyleGuide/Text";

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
