import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { YearsLine } from "./YearsLine";

describe("<YearsLine>", () => {
  test("smoke", () => {
    expect(() =>
      render(<YearsLine beginYear={2012} endYear={2015} />)
    ).not.toThrow();
  });
  it("should pass by render years", () => {
    const { getByText, queryByText } = render(
      <YearsLine beginYear={2011} endYear={2015} />
    );
    expect(getByText("2011")).toBeVisible();
    expect(getByText("2012")).toBeVisible();
    expect(getByText("2013")).toBeVisible();
    expect(getByText("2014")).toBeVisible();
    expect(getByText("2015")).toBeVisible();
    expect(queryByText("2017")).toBeNull();
  });
});
