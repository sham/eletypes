import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../store';
import { setTarget } from '../actions/setTarget';

interface IProps {
  keyState: object;
  dispatchSetTarget: (keyCode: number) => void;
}

class Display extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return <div style={{ width: '1050px', height: '350px', overflow: 'hidden' }} />;
  }
}

export default connect(
  (state: IState) => ({ keyState: state.reducer.keyState }),
  { dispatchSetTarget: setTarget }
)(Display);
