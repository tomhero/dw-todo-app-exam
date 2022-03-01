import { InputSelect } from '@components/Input';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '21px' }}>Data Wow Todo List</h1>
      <h2 style={{ textAlign: 'center', marginTop: '21px' }}>งานที่ต้องทำใน วันนี้</h2>
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
      />
    </>
  );
};

export default Home;
