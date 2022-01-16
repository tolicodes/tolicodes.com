import React from "react";
import "../../../styles/main.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Resume from ".";

export default {
  title: "Home/Resume",
  component: Resume,
} as ComponentMeta<typeof Resume>;

const Template: ComponentStory<typeof Resume> = (args) => <Resume {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
