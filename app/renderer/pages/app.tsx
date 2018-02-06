import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Head from 'next/head';

import reducer from '../reducers/reducer';
import KeyDetector from '../components/keyDetector';
import Display from '../components/display';
import Keyboard from '../containers/keyboard';

const store = createStore(reducer);

export default class extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Head>
          <title>eletypes</title>
        </Head>
        <Provider store={store}>
          <KeyDetector>
            <Display />
            <Keyboard />
          </KeyDetector>
        </Provider>
      </React.Fragment>
    );
  }
}
