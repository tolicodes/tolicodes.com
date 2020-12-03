import { render } from "@testing-library/react";
import React from "react";
import { Timeline } from "./Timeline";

describe("<Timeline/>", () => {
  test("smoke", () => {
    expect(() => {
      render(<Timeline items={[]} />);
    }).not.toThrow();
  });
});
