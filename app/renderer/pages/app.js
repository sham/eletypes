import React from 'react';
import Head from 'next/head';

import Keyboard from '../containers/keyboard';
import stylesheet from '../styles/app.css';

export default class extends React.Component {
  onKeyDownCapture(event) {
    console.log('Down: ' + event.keyCode);
  }
  onKeyUpCapture(event) {
    console.log('  Up: ' + event.keyCode);
  }
  render() {
    return <React.Fragment>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>
      <div style={{ outline: 'none' }} tabIndex='0' onKeyDownCapture={ this.onKeyDownCapture.bind(this) } onKeyUpCapture={ this.onKeyUpCapture.bind(this) }>
        <div style={{ height: '350px' }} />
        <Keyboard />
      </div>
    </React.Fragment>;
  }
}