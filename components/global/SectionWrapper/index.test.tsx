import { render } from "@testing-library/react";
import React from "react";
import SectionWrapper from ".";

describe("<SectionWrapper/>", () => {
  const title = "TEST";
  const { getByText } = render(<SectionWrapper title={title} />);

  test("Contains title", () => {
    expect(getByText(title)).toBeInTheDocument();
  });
});
