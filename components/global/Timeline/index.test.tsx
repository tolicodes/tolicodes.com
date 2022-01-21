import { render } from "@testing-library/react";
import React from "react";
import Timeline from ".";
import Data from "../../../mock/timeline";

describe("<Timeline/>", () => {
  test("Renders timeline with empty data", () => {
    expect(() => {
      render(<Timeline timeline={{ data: [] }} />);
    }).not.toThrowError();
  });

  test("Renders timeline with mock data", () => {
    expect(() => {
      render(<Timeline timeline={{ ...Data }} />);
    }).not.toThrowError();
  });
});
