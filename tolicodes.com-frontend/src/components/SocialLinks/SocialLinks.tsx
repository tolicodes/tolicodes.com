import * as React from "react";

import { SSocialLinks } from "./SSocialLinks";

enum SocialNetwork {
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
  Mail = "Mail",
}

type TLink = {
  logoSrc: string;
  socialNetwork: SocialNetwork;
  uri: string;
};

interface ISocialLinks {
  links?: TLink[];
}

const LINKS_MOCK = [
  {
    logoSrc: "https://tolicodes.s3.com/images/linkedin.png",
    socialNetwork: SocialNetwork.LinkedIn,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
  {
    logoSrc: "https://tolicodes.s3.com/images/linkedin.png",
    socialNetwork: SocialNetwork.GitHub,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
  {
    logoSrc: "https://tolicodes.s3.com/images/linkedin.png",
    socialNetwork: SocialNetwork.Mail,
    uri: "https://www.linkedin.com/in/tolicodes/",
  },
];

export const SocialLinks: React.FC<ISocialLinks> = ({ links = LINKS_MOCK }) => {
  return (
    <SSocialLinks>
      {links.map((link) => (
        <li key={link.socialNetwork}>
          <a href={link.uri}>
            <img src={link.logoSrc} alt={link.socialNetwork} />
          </a>
        </li>
      ))}
    </SSocialLinks>
  );
};
