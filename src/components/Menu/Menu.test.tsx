import React from "react";
import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu, MenuProps } from "./Menu";

describe("<Menu/>", () => {
  test("smoke", () => {
    expect(() => {
      render(<Menu links={[]} />);
    }).not.toThrowError();
  });

  it("should render menu items", () => {
    const links: MenuProps["links"] = [
      {
        title: "Resume",
        url: "/resume",
      },
      {
        title: "My story",
        url: "/my-story",
      },
    ];

    const { getByText } = render(<Menu links={links} />);

    expect(getByText("Resume")).toBeVisible();
    expect(getByText("My story")).toBeVisible();
  });
});
