import React from 'react';
import { Meta, Story } from '@storybook/react';
import TodoItem, { TodoItemProps } from './TodoItem';
import { TODO_STATUS } from '@models/todo';

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

const Template: Story<TodoItemProps> = (args) => <TodoItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  todoItem: {
    id: Date.now().toString(),
    text: 'Alone we can do so little, together we can do so much.',
    status: TODO_STATUS.UNDONE,
  },
};
