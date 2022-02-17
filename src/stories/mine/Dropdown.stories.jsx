import React from 'react';
import { Dropdown } from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mine/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};