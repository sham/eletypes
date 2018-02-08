import React from 'react';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';

import { makeStore } from '../store';
import KeyDetector from '../containers/keyDetector';
import Display from '../containers/display';
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
