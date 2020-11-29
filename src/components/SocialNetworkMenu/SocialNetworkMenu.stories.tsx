import { Meta, Story } from "@storybook/react";
import React from "react";
import {
  SocialNetworkMenu,
  SocialNetworkMenuProps,
  SocialNetworkType,
} from "./SocialNetworkMenu";

export default {
  title: "SocialNetworkMenu",
  component: SocialNetworkMenu,
} as Meta;

const Template: Story<SocialNetworkMenuProps> = (args) => (
  <SocialNetworkMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      type: SocialNetworkType.GitHub,
      url: "https://github.com/tolicodes/tolicodes.com",
    },
    {
      type: SocialNetworkType.LinkedIn,
      url: "https://www.linkedin.com/in/tolicodes/",
    },
  ],
};
