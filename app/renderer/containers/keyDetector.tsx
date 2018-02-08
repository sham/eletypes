import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../store';
import { keyToggle } from '../actions/keyToggle';

interface IProps {
  keyState: object;
  dispatchKeyToggle: (keyCode: number) => void;
  children?: Element;
}

class KeyDetector extends React.Component<IProps> {
  private keyDetector: HTMLDivElement;
  private onKeyDown: (event: any) => void;
  private onKeyUp: (event: any) => void;

  constructor(props) {
    super(props);
    this.onKeyUp = (event) => {
      const { keyState, dispatchKeyToggle } = this.props;
      if (keyState[event.keyCode]) {
        dispatchKeyToggle(event.keyCode);
      }
    };
    this.onKeyDown = (event) => {
      const { keyState, dispatchKeyToggle } = this.props;
      if (!keyState[event.keyCode]) {
        dispatchKeyToggle(event.keyCode);
      }
    };
  }
  public componentDidMount() {
    this.keyDetector.focus();
  }
  public render() {
    const { children } = this.props;

    return (
      <div
        ref={(ref) => this.keyDetector = ref}
        style={{ outline: 'none' }}
        tabIndex={0}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
      >
        {children}
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({ keyState: state.reducer.keyState }),
  { dispatchKeyToggle: keyToggle }
)(KeyDetector);
