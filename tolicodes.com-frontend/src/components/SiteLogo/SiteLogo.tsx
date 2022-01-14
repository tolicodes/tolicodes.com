import React, { FC } from "react";
import { SSiteLogo } from "./styles";

import { IconLogo } from "../Icons";

interface ISiteLogo {
  logoSrc?: string | React.ReactElement;
  altText: string;
}

export const SiteLogo: FC<ISiteLogo> = ({
  logoSrc = <IconLogo />,
  altText,
}) => {
  if (typeof logoSrc !== "string") {
    return logoSrc;
  }

  return <SSiteLogo src={logoSrc} alt={altText} />;
};
