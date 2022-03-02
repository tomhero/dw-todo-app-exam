import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputCheckbox, { InputCheckboxProps } from './InputCheckbox';

export default {
  title: 'Components/Input/Checkbox',
  component: InputCheckbox,
  parameters: {
    docs: {
      description: {
        component: 'A Markable Checkbox Component',
      },
    },
  },
} as Meta;

const Template: Story<InputCheckboxProps> = (args) => <InputCheckbox {...args} />;

export const DefaultNotChecked = Template.bind({});
DefaultNotChecked.args = {
  defaultChecked: false,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
};
