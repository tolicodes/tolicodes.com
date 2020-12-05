import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { YearLineProps, YearsLine } from "./YearsLine";

export default {
  title: "YearsLine",
  component: YearsLine,
  argTypes: {
    beginYear: { control: "number" },
    endYear: { control: "number" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story<YearLineProps> = ({ ...args }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%">
    <YearsLine {...args} />
  </svg>
);

export const Default = Template.bind({});
Default.args = {
  beginYear: 2011,
  endYear: 2015,
  y: 0,
};
