import React, { useState } from 'react';

import { ActionButton, ActionItem } from '@components/Button';
import { InputCheckbox, InputText } from '@components/Input';

import { ITodoItem } from '@models/todo';

export type TodoItemProps = {
  id?: string;
  className?: string;
  todoItem: ITodoItem;
  mode?: 'read' | 'edit';
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

const TodoItem = ({ id, className, todoItem, mode = 'read' }: TodoItemProps) => {
  const [setTodoText, setSetTodoText] = useState(todoItem.text);

  const inputTextClassNames = ['dw-todo-item__text'];
  if (mode === 'read') {
    inputTextClassNames.push('dw-todo-item__text--read');
  } else {
    inputTextClassNames.push('dw-todo-item__text--edit');
  }

  return (
    <div className={`dw-todo-item ${className ? className : ''}`}>
      <InputText
        className={inputTextClassNames.join(' ')}
        value={setTodoText}
        onChange={(v) => setSetTodoText(v.target.value)}
        readOnly={mode === 'read'}
      />
      {mode === 'read' && (
        <>
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
        </>
      )}
    </div>
  );
};

export default TodoItem;
