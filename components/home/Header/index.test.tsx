import { render } from "@testing-library/react";
import React from "react";
import Header from ".";

describe("<Header/>", () => {
  test("Header", () => {
    expect(() => {
      render(<Header />);
    }).not.toThrowError();
  });
});
