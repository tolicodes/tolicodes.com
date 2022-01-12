import React, { FC } from "react";
import { SSiteLogo } from "./styles";

interface ISiteLogo {
  logoSrc: string;
  altText: string;
}

export const SiteLogo: FC<ISiteLogo> = ({ logoSrc, altText }) => (
  <SSiteLogo src={logoSrc} alt={altText} />
);
