import * as React from "react";

import { SSocialLink } from "./SSocialLink";

import { ISocialLink } from "..";

export const SocialLink: React.FC<ISocialLink> = ({
  socialNetwork,
  uri,
  icon,
}) => {
  return (
    <SSocialLink>
      <a title={socialNetwork} href={uri}>{icon}</a>
    </SSocialLink>
  );
};
