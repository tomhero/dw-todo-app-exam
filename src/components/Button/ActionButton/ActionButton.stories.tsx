import React from 'react';
import { Meta, Story } from '@storybook/react';
import ActionButton, { ActionItem, ActionButtonProps } from './ActionButton';

export default {
  title: 'Components/Button/ActionButton',
  component: ActionButton,
  parameters: {
    docs: {
      description: {
        component: 'An Action Button Component',
      },
    },
  },
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

const actions: ActionItem[] = [
  {
    label: 'Edit',
    action: 'edit',
  },
  {
    label: 'Delete',
    action: 'delete',
    extraClassName: 'dw-text-danger',
  },
];

export const Example = Template.bind({});
Example.args = {
  actions,
};
