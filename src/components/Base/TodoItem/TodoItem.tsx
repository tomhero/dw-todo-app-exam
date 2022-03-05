import React from 'react';

import { ActionButton, ActionItem, Button } from '@components/Button';
import { InputCheckbox, InputText } from '@components/Input';

import { ITodoItem, TodoAction, TODO_STATUS } from '@models/todo';

export type TodoItemProps = {
  id?: string;
  className?: string;
  todoItem: ITodoItem;
  mode?: 'read' | 'edit';
  onCheckboxClick: (isDone: boolean) => void;
  onTextChange: (textValue: string) => void;
  onSelectAction: (actionName: TodoAction) => void;
  onSave?: () => void;
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

const TodoItem = ({
  id,
  className,
  todoItem,
  mode = 'read',
  onCheckboxClick,
  onTextChange,
  onSelectAction,
  onSave,
}: TodoItemProps) => {
  const inputTextClassNames = ['dw-todo-item__text'];
  if (mode === 'read') {
    inputTextClassNames.push('dw-todo-item__text--read');
  } else {
    inputTextClassNames.push('dw-todo-item__text--edit');
  }

  if (todoItem.status === TODO_STATUS.DONE) {
    inputTextClassNames.push('dw-todo-item__text--completed');
  }

  return (
    <div id={id} className={`dw-todo-item ${className ? className : ''}`}>
      <InputText
        id={`${id}-text`}
        className={inputTextClassNames.join(' ')}
        value={todoItem.text}
        onChange={(ev) => onTextChange(ev.target.value)}
        readOnly={mode === 'read'}
      />
      {mode === 'read' ? (
        <>
          <InputCheckbox
            id={`${id}-checkbox`}
            className="dw-todo-item__checkbox"
            onChange={onCheckboxClick}
          />
          <ActionButton
            id={`${id}-button`}
            className="dw-todo-item__action-button"
            actions={todoActions}
            onClickAction={(act) => onSelectAction(act as TodoAction)}
          />
        </>
      ) : (
        <Button id={`${id}-save-button`} className="dw-todo-item__save-button" onClick={onSave}>
          Save
        </Button>
      )}
    </div>
  );
};

export default TodoItem;
