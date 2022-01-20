import { render } from "@testing-library/react";
import React from "react";
import Timeline from ".";

describe("<Timeline/>", () => {
  test("Renders timeline with empty data", () => {
    expect(() => {
      render(<Timeline timeline={{ data: [] }} />);
    }).not.toThrowError();
  });
});
