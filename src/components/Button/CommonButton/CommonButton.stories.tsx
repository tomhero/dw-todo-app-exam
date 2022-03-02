import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { CommonButtonProps } from './CommonButton';

export default {
  title: 'Components/Button/CommonButton',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A Common Button Component',
      },
    },
  },
} as Meta;

const Template: Story<CommonButtonProps> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: <i>Save</i>,
};
