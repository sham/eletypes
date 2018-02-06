import React from 'react';
import { RaisedButton } from 'material-ui';

interface IProps {
  label: string;
  pressed?: boolean;
  style?: object;
}

export default class Key extends React.Component<IProps> {
  public shouldComponentUpdate(nextProps) {
    return this.props.pressed !== nextProps.pressed;
  }
  public render() {
    const { label, pressed = false, style = {} } = this.props;
    const styles = {
      margin: 4,
      width: 88,
      height: 50,
      pointerEvents: 'none',
      ...style
    };

    return <RaisedButton backgroundColor='#E6E6E6' label={label} primary={pressed} style={styles} />;
  }
}
