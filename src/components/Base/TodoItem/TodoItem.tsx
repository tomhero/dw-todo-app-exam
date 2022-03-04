import React, { useState } from 'react';

import { ActionButton, ActionItem } from '@components/Button';
import { InputCheckbox, InputText } from '@components/Input';

import { ITodoItem } from '@models/todo';

export type TodoItemProps = {
  id?: string;
  className?: string;
  todoItem: ITodoItem;
  mode: 'read' | 'edit';
};

const todoActions: ActionItem[] = [
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

const TodoItem = ({ id, className, todoItem }: TodoItemProps) => {
  const [setTodoText, setSetTodoText] = useState(todoItem.text);

  return (
    <div className={`dw-todo-item ${className ? className : ''}`}>
      <InputText
        className="dw-todo-item__text"
        value={setTodoText}
        onChange={(v) => setSetTodoText(v.target.value)}
      />
      <InputCheckbox
        className="dw-todo-item__checkbox"
        onChange={(v) => {
          console.log(v);
        }}
      />
      <ActionButton
        className="dw-todo-item__action-button"
        actions={todoActions}
        onClickAction={(v) => {
          console.log(v);
        }}
      />
    </div>
  );
};

export default TodoItem;
