import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@redux/store';

import { Layout } from '@components/Layout';

import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
