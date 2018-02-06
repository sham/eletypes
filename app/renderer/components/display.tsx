import React from 'react';
import { connect } from 'react-redux';

import { setTarget } from '../actions/setTarget';

interface IProps {
  keyState: object;
  setTarget: () => void;
}

class Display extends React.Component<IProps> {
  public render() {
    return <div style={{ width: '1050px', height: '350px', overflow: 'hidden' }} />;
  }
}

export default connect((state) => ({ keyState: state.keyState }), { setTarget })(Display);
