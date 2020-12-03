import { Story } from "@storybook/react";
import React from "react";
import { Timeline, TimeLineProps } from "./Timeline";

export default {
  title: "Timeline",
  component: Timeline,
};

const Template: Story<TimeLineProps> = (...args) => <Timeline {...args} />;

export const Default = Timeline.bind({});
