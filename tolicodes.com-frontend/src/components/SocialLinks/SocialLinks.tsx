import * as React from "react";

import { SSocialLinks } from "./SSocialLinks";

import { SocialLink } from "../../components";

import { IconLinkedIn, IconGithub, IconMail } from "../Icons";

enum SocialNetwork {
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
  Mail = "Mail",
}

export interface ISocialLink {
  icon: React.ReactNode;
  socialNetwork: SocialNetwork;
  uri: string;
}

interface ISocialLinks {
  links?: ISocialLink[];
}

const LINKS_MOCK = [
  {
    icon: <IconLinkedIn />,
    socialNetwork: SocialNetwork.LinkedIn,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
  {
    icon: <IconGithub />,
    socialNetwork: SocialNetwork.GitHub,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
  {
    icon: <IconMail />,
    socialNetwork: SocialNetwork.Mail,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
];

export const SocialLinks: React.FC<ISocialLinks> = ({ links = LINKS_MOCK }) => {
  return (
    <SSocialLinks>
      {links.map((link) => (
        <SocialLink
          key={link.socialNetwork}
          socialNetwork={link.socialNetwork}
          uri={link.uri}
          icon={link.icon}
        />
      ))}
    </SSocialLinks>
  );
};
