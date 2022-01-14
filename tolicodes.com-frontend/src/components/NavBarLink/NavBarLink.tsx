import * as React from "react";

import { SNavBarLink } from "./SNavBarLink";

interface INavBarLink {
  name: string;
  uri: string;
}

export const NavBarLink: React.FC<INavBarLink> = ({ name, uri }) => (
  <SNavBarLink>
    <a href={uri}>{name}</a>
  </SNavBarLink>
);
