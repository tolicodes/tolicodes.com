import * as React from "react";

import { SNavBar } from "./SNavBar";

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
    name: "Hobbies",
    uri: "/hobbies",
  },
];

export const NavBar: React.FC<INavBar> = ({ navigation = NAVIGATION_MOCK }) => {
  return (
    <SNavBar>
      <ul>
        {navigation.map((navigationItem) => (
          <li key={navigationItem.name}>
            <a href={navigationItem.uri}>{navigationItem.name}</a>
          </li>
        ))}
      </ul>
    </SNavBar>
  );
};