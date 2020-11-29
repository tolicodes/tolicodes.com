import { Meta, Story } from "@storybook/react";
import React from "react";
import { YouTubeVideo, YouTubeVideoProps } from "./YouTubeVideo";

export default {
  title: "YouTubeVideo",
  component: YouTubeVideo,
} as Meta;

const Template: Story<YouTubeVideoProps> = (args) => <YouTubeVideo {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://youtube.com/embed/oagszCmJLpU",
};
