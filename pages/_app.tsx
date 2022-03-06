import React from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@redux/store';

import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Wow Todo List</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
