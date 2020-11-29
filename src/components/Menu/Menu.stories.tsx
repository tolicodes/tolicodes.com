import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Menu, MenuProps } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      title: "Resume",
      url: "/resume",
    },
    {
      title: "CodeMentor",
      url: "/codeMentor",
    },
    {
      title: "My story",
      url: "/my-story",
    },
    {
      title: "Hobbies",
      url: "/hobbies",
    },
    {
      title: "Open Source",
      url: "/open-source",
    },
  ] as MenuProps["links"],
};
