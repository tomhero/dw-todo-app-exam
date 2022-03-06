import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITodoItem, TODO_STATUS } from '@models/todo';

import { Layout } from '@components/Layout';
import { InputOptionItem, InputSelect } from '@components/Input';
import { ProgressPanel } from '@components/Base/ProgressPanel';
import { TodoItem } from '@components/Base/TodoItem';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { fetchTodoList, todoAction, updateTodo } from '@redux/slices/todo';

const newTodoTemplate: ITodoItem = {
  id: uuidv4(),
  status: TODO_STATUS.UNDONE,
  text: '',
};

const filterOptions: InputOptionItem[] = [
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

const Home: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState(newTodoTemplate);
  const [currentEditTodoIndex, setCurrentEditTodoIndex] = useState<number>();

  const todoState = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const getFilteredTodo = () => {
    if (filter === 'done') {
      return todoState.todoList.filter((todo) => todo.status === TODO_STATUS.DONE);
    } else if (filter === 'undone') {
      return todoState.todoList.filter((todo) => todo.status === TODO_STATUS.UNDONE);
    }
    return todoState.todoList;
  };

  const loadTodoList = async () => {
    const resultAction = await dispatch(fetchTodoList());
    if (fetchTodoList.fulfilled.match(resultAction)) {
      const todoListData = resultAction.payload;
      console.info('[info] : load todo list success', todoListData);
    } else {
      // NOTE : Handle erros
      alert('Cannot load todo list.');
    }
  };

  const handleActionContextMenu = (action: string, index: number) => {
    if (action === 'edit') setCurrentEditTodoIndex(index);
    if (action === 'delete') {
      console.log('start delete...');
    }
  };

  const handleEditTodo = async (editItem: ITodoItem) => {
    const resultAction = await dispatch(updateTodo(editItem));
    if (fetchTodoList.fulfilled.match(resultAction)) {
      const todoData = resultAction.payload;
      console.info('[info] : edit todo success', todoData);
    } else {
      alert('Cannot edit todo item.');
    }
  };

  useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <Layout className="dw-home" withContainer>
      <ProgressPanel
        className="dw-home__progress-panel"
        totalCount={todoState.todoCount}
        completeCount={todoState.doneTodoCount}
      />
      <section className="dw-home__todo-list-head">
        <h2 className="dw-text-h2">Tasks</h2>
        <InputSelect options={filterOptions} selectedValue={filter} onSelect={setFilter} />
      </section>
      <section className="dw-home__todo-list">
        {getFilteredTodo().map((item, index) => (
          <TodoItem
            key={item.id}
            id={item.id + ''}
            className="dw-home__todo-list__existing-todo"
            todoItem={item}
            onCheckboxClick={(v) => console.log(v)}
            onTextChange={(v) => console.log(v)}
            onSelectAction={(act) => handleActionContextMenu(act, index)}
            onSave={() => handleEditTodo(item)}
            mode={index === currentEditTodoIndex ? 'edit' : 'read'}
            isNew={false}
          />
        ))}
        <TodoItem
          id="new-item"
          className="dw-home__todo-list__new-todo"
          todoItem={newTodo}
          onCheckboxClick={(v) => console.log(v)}
          onTextChange={(v) =>
            setNewTodo({
              ...newTodo,
              text: v,
            })
          }
          onSelectAction={(v) => console.log(v)}
          onSave={() => console.log('save...')}
          mode="edit"
          isNew
        />
      </section>
    </Layout>
  );
};

export default Home;
