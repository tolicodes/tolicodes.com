import * as React from "react";

import { SNavBar } from "./SNavBar";

import { NavBarLink } from "../../components";

type TNavigationItem = {
  name: string;
  uri: string;
};

interface INavBar {
  navigation?: TNavigationItem[];
}

const NAVIGATION_MOCK = [
  {
    name: "Resume",
    uri: "/resume",
  },
  {
    name: "CodeMentor",
    uri: "/code-mentor",
  },
  {
    name: "My story",
    uri: "/my-story",
  },
  {
    name: "Services",
    uri: "/services",
  },
  {
    name: "Hobbies",
    uri: "/hobbies",
  },
  {
    name: "Open Source",
    uri: "/open-source",
  },
  {
    name: "Portfolio",
    uri: "/portfolio",
  },
];

export const NavBar: React.FC<INavBar> = ({ navigation = NAVIGATION_MOCK }) => {
  return (
    <SNavBar>
      <ul>
        {navigation.map((navigationItem) => (
          <NavBarLink
            key={navigationItem.name}
            name={navigationItem.name}
            uri={navigationItem.uri}
          />
        ))}
      </ul>
    </SNavBar>
  );
};
