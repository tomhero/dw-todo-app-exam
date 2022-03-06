import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import ProgressPanel, { ProgressPanelProps } from './ProgressPanel';

export default {
  title: 'Base/ProgressPanel',
  component: ProgressPanel,
  parameters: {
    docs: {
      description: {
        component: 'A ProgressPanel Base Component',
      },
    },
  },
} as Meta;

const Template: Story<ProgressPanelProps> = (args) => (
  <Provider store={store}>
    <ProgressPanel {...args} />
  </Provider>
);

export const Example = Template.bind({});
Example.args = {
  totalCount: 100,
  completeCount: 25,
};
