import { ComponentStory } from '@storybook/react';
import React from 'react';

import { SiteName, ISiteNameProps } from './SiteName';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header/SiteName',
  component: SiteName,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteName> = (args) => <SiteName {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  siteLogoSrc: 'Logo here',
  siteTagline: 'Anatoliy D. Zaslavskiy',
};
