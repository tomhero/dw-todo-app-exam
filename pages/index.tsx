import React, { useState } from 'react';

import { ITodoItem, TODO_STATUS } from '@models/todo';
import { Layout } from '@components/Layout';

import { InputSelect } from '@components/Input';
import { ProgressPanel } from '@components/Base/ProgressPanel';
import { TodoItem } from '@components/Base/TodoItem';

const mockTodoList: ITodoItem[] = [
  {
    id: '1',
    text: 'delectus aut autem',
    status: TODO_STATUS.DONE,
  },
  {
    id: '2',
    text: 'quis ut nam facilis et officia qui',
    status: TODO_STATUS.UNDONE,
  },
  {
    id: '3',
    text: 'fugiat veniam minus',
    status: TODO_STATUS.UNDONE,
  },
];

const newTodoTemplate: ITodoItem = {
  id: '4',
  status: TODO_STATUS.UNDONE,
  text: '',
};

const Home: React.FC = () => {
  const [newTodo, setNewTodo] = useState(newTodoTemplate);

  return (
    <Layout className="dw-home" withContainer>
      <ProgressPanel
        className="dw-home__progress-panel"
        totalCount={mockTodoList.length}
        completeCount={1}
      />
      <section className="dw-home__todo-list-head">
        <h2>Tasks</h2>
        <InputSelect
          options={[
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
          ]}
          selectedValue="all"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onSelect={() => {}}
        />
      </section>
      <section className="dw-home__todo-list">
        {mockTodoList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id + ''}
            className="dw-home__todo-list__existing-todo"
            todoItem={item}
            onCheckboxClick={(v) => console.log(v)}
            onTextChange={(v) => console.log(v)}
            onSelectAction={(v) => console.log(v)}
            onSave={() => console.log('save...')}
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
