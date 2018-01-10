import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTarget } from '../actions/setTarget';

class Display extends React.Component {
  render() {
    return <div style={{ height: '350px', overflow: 'hidden' }}>
    </div>;
  }
}
Display.propTypes = {
  keyState: PropTypes.object.isRequired,
  setTarget: PropTypes.func.isRequired
};

export default connect((state) => ({ keyState: state.keyState }), { setTarget })(Display);