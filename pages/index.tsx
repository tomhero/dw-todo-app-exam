import React from 'react';

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

const Home: React.FC = () => {
  return (
    <Layout withContainer>
      <h1 style={{ textAlign: 'center', marginTop: '21px' }}>Data Wow Todo List</h1>
      <ProgressPanel totalCount={mockTodoList.length} completeCount={1} />
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
      <br />
      {mockTodoList.map((item) => (
        <TodoItem
          id={item.id + ''}
          key={item.id}
          todoItem={item}
          onCheckboxClick={(v) => console.log(v)}
          onTextChange={(v) => console.log(v)}
          onSelectAction={(v) => console.log(v)}
          onSave={() => console.log('save...')}
        />
      ))}
      <TodoItem
        todoItem={{ id: '4', status: TODO_STATUS.UNDONE, text: '' }}
        onCheckboxClick={(v) => console.log(v)}
        onTextChange={(v) => console.log(v)}
        onSelectAction={(v) => console.log(v)}
        mode="edit"
        onSave={() => console.log('save...')}
      />
    </Layout>
  );
};

export default Home;
