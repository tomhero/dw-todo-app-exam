import React, { useEffect, useState } from 'react';

import { ITodoItem, TodoAction, TODO_STATUS } from '@models/todo';

import { ActionButton, ActionItem, Button } from '@components/Button';
import { InputCheckbox, InputText } from '@components/Input';

export type TodoItemProps = {
  id?: string;
  className?: string;
  todoItem: ITodoItem;
  mode?: 'read' | 'edit';
  isNew?: boolean;
  onCheckboxClick?: (isDone: boolean) => void;
  onSelectAction?: (actionName: TodoAction) => void;
  onSave?: (todo: ITodoItem) => void;
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
  isNew = false,
  onCheckboxClick,
  onSelectAction,
  onSave,
}: TodoItemProps) => {
  const [todoText, setTodoText] = useState('');

  const inputTextClassNames = ['dw-todo-item__text'];
  if (mode === 'read') {
    inputTextClassNames.push('dw-todo-item__text--read');
  } else {
    inputTextClassNames.push('dw-todo-item__text--edit');
  }

  if (todoItem.status === TODO_STATUS.DONE) {
    inputTextClassNames.push('dw-todo-item__text--completed');
  }

  useEffect(() => {
    if (todoItem) {
      setTodoText(todoItem.text);
    }
  }, [todoItem]);

  const renderEditPreset = () => {
    return (
      <>
        <InputCheckbox
          id={`${id}-checkbox`}
          className="dw-todo-item__checkbox"
          onChange={onCheckboxClick}
          defaultChecked={todoItem.status === TODO_STATUS.DONE}
        />
        <ActionButton
          id={`${id}-action-button`}
          className="dw-todo-item__action-button"
          actions={todoActions}
          onClickAction={(act) => {
            if (onSelectAction) onSelectAction(act as TodoAction);
          }}
        />
      </>
    );
  };

  const renderAddPreset = () => {
    return (
      todoText !== '' && (
        <Button
          id={`${id}-save-button`}
          className="dw-todo-item__save-button"
          onClick={() => {
            console.log('todoText', todoText);
            if (onSave) onSave({ ...todoItem, text: todoText });
          }}
          type="submit"
        >
          Save
        </Button>
      )
    );
  };

  return (
    <form
      id={id}
      className={`dw-todo-item ${className ? className : ''}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputText
        id={`${id}-text`}
        className={inputTextClassNames.join(' ')}
        value={todoText}
        onChange={(ev) => setTodoText(ev.target.value)}
        readOnly={mode === 'read'}
        placeholder={`${isNew ? 'Add' : 'Edit'} your todo...`}
      />
      {mode === 'read' ? renderEditPreset() : renderAddPreset()}
    </form>
  );
};

export default TodoItem;
