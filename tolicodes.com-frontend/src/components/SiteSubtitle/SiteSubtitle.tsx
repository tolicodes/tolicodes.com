import React, { FC } from "react";
import { SSiteSubtitle } from "./SSiteSubtitle";

interface ISiteSubtitle {
  subtitleText: string;
}

export const SiteSubtitle: FC<ISiteSubtitle> = ({ subtitleText }) => {
  return <SSiteSubtitle>{subtitleText}</SSiteSubtitle>;
};
