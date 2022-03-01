import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputSelect, { InputSelectProps, InputOptionItem } from './InputSelect';

export default {
  title: 'Components/Input/SelectInput',
  component: InputSelect,
  parameters: {
    docs: {
      description: {
        component: 'A Select Input Component',
      },
    },
  },
} as Meta;

const Template: Story<InputSelectProps> = (args) => <InputSelect {...args} />;

const mockOptions: InputOptionItem[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Done',
    value: 'done',
  },
  {
    label: 'Undone',
    value: 'undone',
  },
];
export const Example = Template.bind({});
Example.args = {
  options: mockOptions,
  selectedValue: 'all',
};
