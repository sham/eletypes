import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Head from 'next/head';

import reducer from '../reducers/reducer';
import KeyDetector from '../components/keyDetector';
import Keyboard from '../containers/keyboard';
import stylesheet from '../styles/app.css';

const store = createStore(reducer);

export default class extends React.Component {
  render() {
    return <React.Fragment>
      <Head>
        <title>eletypes</title>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <Provider store={ store }>
        <KeyDetector>
          <div style={{ height: '350px' }} />
          <Keyboard />
        </KeyDetector>
      </Provider>
    </React.Fragment>;
  }
}