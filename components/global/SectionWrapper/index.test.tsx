import { render } from "@testing-library/react";
import React from "react";
import SectionWrapper from ".";

describe("<SectionWrapper/>", () => {
  test("SectionWrapper", () => {
    expect(() => {
      render(<SectionWrapper title="Test" />);
    }).not.toThrowError();
  });
});
