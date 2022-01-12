import * as React from "react";

import { SiteName, SocialLinks, NavBar } from "../../components";

import { SHeader } from "./SHeader";

export const Header = () => {
  return (
    <SHeader>
      <SiteName />
      <SocialLinks />
      <NavBar />
    </SHeader>
  );
};
