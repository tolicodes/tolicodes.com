import React from "react";
import "../../../styles/main.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from ".";

export default {
  title: "Home/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
