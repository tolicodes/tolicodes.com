import { Story } from "@storybook/react";
import React from "react";
import { Timeline, TimeLineProps } from "./Timeline";

export default {
  title: "Timeline",
  component: Timeline,
};

const Template: Story<TimeLineProps> = (...args) => <Timeline {...args} />;

export const Default = Timeline.bind({});
Default.args = {
  projects: [
    {
      title: "The Doctor's Channel",
      iconUrl: "/assets/...",
      tag: "Jobs",
      begin: "2011/01",
      end: "2011/03",
    },
    {
      title: "Tanya Taylor",
      iconUrl: "/assets/...",
      tag: "Jobs",
      begin: "2012/01",
      end: "2013/12",
    },
    {
      title: "The Doctor's Channel",
      iconUrl: "/assets/...",
      tag: "Freelance",
      begin: "2011/01",
      end: "2011/03",
    },
    {
      title: "Tanya Taylor",
      iconUrl: "/assets/...",
      tag: "Freelance",
      begin: "2012/01",
      end: "2013/12",
    },
    {
      title: "The Doctor's Channel",
      iconUrl: "/assets/...",
      tag: "Startups",
      begin: "2011/01",
      end: "2011/03",
    },
    {
      title: "Tanya Taylor",
      iconUrl: "/assets/...",
      tag: "Startups",
      begin: "2012/01",
      end: "2013/12",
    },
    {
      title: "The Doctor's Channel",
      iconUrl: "/assets/...",
      tag: "Tech",
      begin: "2011/01",
      end: "2011/03",
    },
    {
      title: "Tanya Taylor",
      iconUrl: "/assets/...",
      tag: "Tech",
      begin: "2012/01",
      end: "2015/12",
    },
  ],
};
