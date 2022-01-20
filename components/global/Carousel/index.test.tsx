import { render } from "@testing-library/react";
import React from "react";
import Carousel from ".";

describe("<Carousel/>", () => {
  test("Carousel", () => {
    expect(() => {
      render(<Carousel />);
    }).not.toThrowError();
  });
});
