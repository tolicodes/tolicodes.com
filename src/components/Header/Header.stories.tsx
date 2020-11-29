import { Story } from "@storybook/react";
import React from "react";
import { Default as Menu } from "../Menu/Menu.stories";
import { SocialNetworkType } from "../SocialNetworkMenu";
import { Default as SocialNetworkMenu } from "../SocialNetworkMenu/SocialNetworkMenu.stories";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Header",
  components: Header,
};

const Template: Story<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: <h1>Logo</h1>,
  children: (
    <>
      <Menu
        links={[
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
        ]}
      />
      <SocialNetworkMenu
        links={[
          {
            type: SocialNetworkType.GitHub,
            url: "https://github.com/tolicodes/tolicodes.com",
          },
          {
            type: SocialNetworkType.LinkedIn,
            url: "https://www.linkedin.com/in/tolicodes/",
          },
        ]}
      />
    </>
  ),
};
