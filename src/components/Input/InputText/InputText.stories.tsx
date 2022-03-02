import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputText, { InputTextProps } from './InputText';

export default {
  title: 'Components/Input/InputText',
  component: InputText,
  parameters: {
    docs: {
      description: {
        component: 'A Text Input Component',
      },
    },
  },
} as Meta;

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Add your todo...',
};
