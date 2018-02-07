import React from 'react';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';

import { makeStore } from '../reducers/reducer';
import KeyDetector from '../components/keyDetector';
import Display from '../components/display';
import Keyboard from '../containers/keyboard';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Head>
          <title>eletypes</title>
        </Head>
        <KeyDetector>
          <Display />
          <Keyboard />
        </KeyDetector>
      </React.Fragment>
    );
  }
}

export default withRedux({ createStore: makeStore, debug: true })(App);
