import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { keyToggle } from '../actions/keyToggle';

class KeyDetector extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUp = (event) => {
      const { keyState, keyToggle } = this.props;
      if (keyState[event.keyCode]) keyToggle(event.keyCode);
      // console.log('  Up: ' + event.keyCode);
    };
    this.onKeyDown = (event) => {
      const { keyState, keyToggle } = this.props;
      if (!keyState[event.keyCode]) keyToggle(event.keyCode);
      // console.log('Down: ' + event.keyCode);
    };
  }
  componentDidMount() {
    this.keyDetector.focus();
  }
  render() {
    const { children } = this.props;
    return <div ref={ (ref) => this.keyDetector = ref } 
      style={{ outline: 'none' }} 
      tabIndex='0' 
      onKeyDown={ this.onKeyDown } 
      onKeyUp={ this.onKeyUp }>
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