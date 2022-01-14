import React, { useState, useEffect } from "react";

import {
  IPortfolioListItem,
  PortfolioListItem,
} from "../PortfolioItem/PortfolioItem";

import { getCollection } from "../../firebase";
import { SPortfolioList } from "./SPortfolioList";

interface IDListItem extends IPortfolioListItem {
  id: string;
}

interface IPortfolioList {}

export const PortfolioList: React.FC<IPortfolioList> = () => {
  const [portfolios, setPortfolios] = useState<IDListItem[] | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const portfoliosRef = await getCollection("portfolios");

      let porfolios: IDListItem[] = [];

      portfoliosRef.forEach((doc) => {
        porfolios.unshift({
          id: doc.id,
          ...doc.data(),
        });
      });

      setPortfolios(porfolios);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && portfolios && portfolios?.length !== 0) {
    return (
      <SPortfolioList>
        {portfolios.map((portfolio: IDListItem) => (
          <PortfolioListItem
            key={portfolio.id}
            title={portfolio.title}
            description={portfolio.description}
            imgSource={portfolio.imgSource}
            links={portfolio.links}
          />
        ))}
      </SPortfolioList>
    );
  }

  return null;
};
