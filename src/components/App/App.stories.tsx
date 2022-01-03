import { Story } from "@storybook/react";
import React from "react";
import App from "./App";

export default {
  title: "Application",
  component: App,
};

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
