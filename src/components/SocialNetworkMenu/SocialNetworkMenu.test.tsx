import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  SocialNetworkMenu,
  SocialNetworkMenuProps,
  SocialNetworkType,
} from "./SocialNetworkMenu";

describe("<SocialLinksMenu/>", () => {
  test("smoke", () => {
    expect(() => {
      render(<SocialNetworkMenu links={[]} />);
    }).not.toThrowError();
  });

  it("should render the menu correctly", () => {
    const links: SocialNetworkMenuProps["links"] = [
      {
        type: SocialNetworkType.GitHub,
        url: "https://github.com/tolicodes/tolicodes.com",
      },
      {
        type: SocialNetworkType.LinkedIn,
        url: "https://www.linkedin.com/in/tolicodes/",
      },
    ];
    const { getByTestId } = render(<SocialNetworkMenu links={links} />);

    expect(getByTestId(/social-network-LinkedIn/i)).toBeVisible();
    expect(getByTestId(/social-network-Github/i)).toBeVisible();
  });
});
