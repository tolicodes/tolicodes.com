import { render } from "@testing-library/react";
import React from "react";
import Resume from ".";

describe("<Resume/>", () => {
  test("Resume", () => {
    expect(() => {
      render(<Resume />);
    }).not.toThrowError();
  });
});
