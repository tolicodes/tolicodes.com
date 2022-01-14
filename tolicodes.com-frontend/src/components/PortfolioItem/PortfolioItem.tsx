import React from "react";

import { Button } from "../../components";

import {
  SPortfolioListItem,
  SPortfolioImageWrapper,
  SPortfolioTextWrapper,
  SPortfolioTitle,
  SPortfolioDescription,
  SPortfolioButtonsWrapper,
} from "./SPortfolioItem";

type PortfolioLink = {
  title: string;
  uri: string;
};

export interface IPortfolioListItem {
  imgSource?: string;
  title?: string;
  description?: string;
  links?: PortfolioLink[];
}

export const PortfolioListItem = ({
  imgSource,
  title,
  description,
  links,
}: IPortfolioListItem) => {
  return (
    <SPortfolioListItem>
      <SPortfolioImageWrapper>
        <img src={imgSource} alt="mock" />
      </SPortfolioImageWrapper>
      <SPortfolioTextWrapper>
        <SPortfolioTitle>{title}</SPortfolioTitle>
        <SPortfolioDescription>{description}</SPortfolioDescription>
      </SPortfolioTextWrapper>
      {links && links.length !== 0 && (
        <SPortfolioButtonsWrapper>
          {links.map((link) => (
            <Button key={link.uri} label={link.title} />
          ))}
        </SPortfolioButtonsWrapper>
      )}
    </SPortfolioListItem>
  );
};
