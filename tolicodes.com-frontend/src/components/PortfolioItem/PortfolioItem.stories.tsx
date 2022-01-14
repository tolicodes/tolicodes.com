import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IPortfolioListItem, PortfolioListItem } from "./PortfolioItem";

import { getCollection } from "../../firebase";

interface IDListItem extends IPortfolioListItem {
  id: string;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Test/PortfolioListItem",
  component: PortfolioListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    imgSource: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} as ComponentMeta<typeof PortfolioListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PortfolioListItem> = (args) => (
  <PortfolioListItem {...args} />
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const FBTemplate = () => {
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
      <>
        {portfolios.map((portfolio: IDListItem) => (
          <PortfolioListItem
            key={portfolio.id}
            title={portfolio.title}
            description={portfolio.description}
            imgSource={portfolio.imgSource}
          />
        ))}
      </>
    );
  }

  return null;
};

export const Default = Template.bind({});
export const FBFetchingDemo = FBTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  imgSource:
    "https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg",
  title: "Homescore - Real Estate",
  description:
    "Homescore is an innovative real estate app that uses a customized algorithm to rank properties by proximity to important places, schools, and many other factors.",
};
