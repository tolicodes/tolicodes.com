import React from "react";

import { SiteLogo } from "../SiteLogo/SiteLogo";
import { SiteSubtitle } from "../SiteSubtitle/SiteSubtitle";

import { SSiteName } from './SSiteName';

export const SiteName = () => (
  <SSiteName>
    <SiteLogo
      // logoSrc="https://tolicodes.s3.com/images/tolicodesLogo.png"
      altText="Site logo"
    />
    <SiteSubtitle subtitleText="Anatoliy D. Zaslavskiy" />
  </SSiteName>
);
