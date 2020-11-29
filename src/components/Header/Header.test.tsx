import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Menu } from "../Menu";
import { SocialNetworkMenu, SocialNetworkType } from "../SocialNetworkMenu";
import { Header } from "./Header";

describe("<Header/>", () => {
  test("smoke", () => {
    expect(() => {
      render(<Header />);
    }).not.toThrowError();
  });

  it("should render with 2 menus", () => {
    const { getByText } = render(
      <Header>
        <h1>Logo</h1>
        <Menu links={[{ title: "About", url: "http://some.example/about" }]} />
        <SocialNetworkMenu
          links={[{ type: SocialNetworkType.GitHub, url: "http://github.com" }]}
        />
      </Header>
    );

    expect(getByText("Logo")).toBeVisible();
    expect(getByText("About")).toBeVisible();
  });
});
