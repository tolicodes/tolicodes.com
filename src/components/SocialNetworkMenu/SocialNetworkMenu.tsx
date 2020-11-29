import React from "react";
import Container from "./Container";
import Item from "./Item";

export enum SocialNetworkType {
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
}

export interface SocialNetworkLink {
  /**
   *
   */
  type: SocialNetworkType;
  /**
   * Link URL
   */
  url: string;
}

export interface SocialNetworkMenuProps {
  links: ReadonlyArray<SocialNetworkLink>;
}

const SocialNetworkIcons = {
  [SocialNetworkType.LinkedIn]: require("./assets/linked-in.png"),
  [SocialNetworkType.GitHub]: require("./assets/github.png"),
};

export function SocialNetworkMenu(props: SocialNetworkMenuProps) {
  return (
    <Container>
      {props.links.map((link) => (
        <Item
          key={link.url}
          data-testid={`social-network-${link.type}`}
          href={link.url}
        >
          <img src={SocialNetworkIcons[link.type]} />
        </Item>
      ))}
    </Container>
  );
}
