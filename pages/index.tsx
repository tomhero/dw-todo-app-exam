import React from 'react';

import { InputSelect } from '@components/Input';
import { Layout } from '@components/Layout';

const Home: React.FC = () => {
  return (
    <Layout withContainer>
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
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSelect={() => {}}
      />
    </Layout>
  );
};

export default Home;
