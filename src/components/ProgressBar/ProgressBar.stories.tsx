import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A Simple Progress Component',
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  percentage: 25,
};
