import * as React from "react";
import { SSection, SSectionTitle } from "./SSection";

interface SectionProps {
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <SSection>
      {title && <SSectionTitle>{title}</SSectionTitle>}
      {children}
    </SSection>
  );
};
