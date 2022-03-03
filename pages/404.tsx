import React from 'react';

import { Layout } from '@components/Layout';

const NotFound: React.FC = () => {
  return (
    <Layout withContainer={false}>
      <h1 style={{ textAlign: 'center', marginTop: '24px' }}>Page Not Found</h1>
      <br />
      <br />
      <img width="50%" height="50%" src="/images/undraw_page_not_found.svg" alt="not found" />
    </Layout>
  );
};

export default NotFound;
