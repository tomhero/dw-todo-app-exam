import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { TODO_STATUS } from '@models/todo';
import TodoItem, { TodoItemProps } from './TodoItem';

export default {
  title: 'Base/TodoItem',
  component: TodoItem,
  parameters: {
    docs: {
      description: {
        component: 'A Todo Item Base Component',
      },
    },
  },
} as Meta;

const Template: Story<TodoItemProps> = (args) => (
  <Provider store={store}>
    <TodoItem {...args} />
  </Provider>
);

export const Example = Template.bind({});
Example.args = {
  todoItem: {
    id: Date.now().toString(),
    text: 'Alone we can do so little, together we can do so much.',
    status: TODO_STATUS.UNDONE,
  },
};
