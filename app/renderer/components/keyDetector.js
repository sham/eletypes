import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { keyToggle } from '../actions/keyToggle';

class KeyDetector extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUpCapture = (event) => {
      const { keyState, keyToggle } = this.props;
      if (keyState[event.keyCode]) keyToggle(event.keyCode);
      // console.log('  Up: ' + event.keyCode);
    };
    this.onKeyDownCapture = (event) => {
      const { keyState, keyToggle } = this.props;
      if (!keyState[event.keyCode]) keyToggle(event.keyCode);
      // console.log('Down: ' + event.keyCode);
    };
  }
  render() {
    const { children } = this.props;
    return <div style={{ outline: 'none' }} tabIndex='0' onKeyDownCapture={ this.onKeyDownCapture } onKeyUpCapture={ this.onKeyUpCapture }>
      { children }
    </div>;
  }
}
KeyDetector.propTypes = {
  keyState: PropTypes.object.isRequired,
  keyToggle: PropTypes.func.isRequired,
  children: PropTypes.any
};

export default connect((state) => ({ keyState: state.keyState }), { keyToggle })(KeyDetector);