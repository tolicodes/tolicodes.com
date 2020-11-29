import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Description } from "./Description";

describe("<Description>", () => {
  test("smoke", () => {
    expect(() => {
      render(<Description>Hello</Description>);
    }).not.toThrowError();
  });

  it("should render title", () => {
    const { getByText } = render(
      <Description title={"About me"}>Test text</Description>
    );
    expect(getByText("About me")).toBeVisible();
    expect(getByText("Test text")).toBeVisible();
  });
});
