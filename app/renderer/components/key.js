import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

export default class Key extends React.Component {
  render() {
    const { label, pressed = false, style = {} } = this.props;
    const styles = {
      margin: 4,
      width: 88,
      height: 50,
      pointerEvents: 'none',
      ...style
    };
    return <RaisedButton backgroundColor='#E6E6E6' label={ label } primary={ pressed } style={ styles } />;
  }
}
Key.propTypes = {
  label: PropTypes.string.isRequired,
  pressed: PropTypes.bool,
  style: PropTypes.object
};