import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';

import { IState } from '../store';
import NoSSR from '../components/NoSSR';
import Key from '../components/key';

interface IProps {
  keyState: object;
}

class Keyboard extends React.Component<IProps> {
  public render() {
    const { keyState } = this.props;
    return (
      <div style={{ width: '1050px', overflow: 'hidden' }}>
        <NoSSR>
          <MuiThemeProvider>
            <React.Fragment>
              <div>
                <Key
                  label='Q'
                  pressed={keyState[81]}
                  style={{ marginLeft: 'calc((1100px - (88px + 8px) * 10) / 2)' }}
                />
                <Key label='W' pressed={keyState[87]} />
                <Key label='E' pressed={keyState[69]} />
                <Key label='R' pressed={keyState[82]} />
                <Key label='T' pressed={keyState[84]} />
                <Key label='Y' pressed={keyState[89]} />
                <Key label='U' pressed={keyState[85]} />
                <Key label='I' pressed={keyState[73]} />
                <Key label='O' pressed={keyState[79]} />
                <Key label='P' pressed={keyState[80]} />
              </div>
              <div>
                <Key
                  label='A'
                  pressed={keyState[65]}
                  style={{ marginLeft: 'calc((1100px - (88px + 8px) * 9) / 2)' }}
                />
                <Key label='S' pressed={keyState[83]} />
                <Key label='D' pressed={keyState[68]} />
                <Key label='F' pressed={keyState[70]} />
                <Key label='G' pressed={keyState[71]} />
                <Key label='H' pressed={keyState[72]} />
                <Key label='J' pressed={keyState[74]} />
                <Key label='K' pressed={keyState[75]} />
                <Key label='L' pressed={keyState[76]} />
              </div>
              <div>
                <Key
                  label='Z'
                  pressed={keyState[90]}
                  style={{ marginLeft: 'calc((1100px - (88px + 8px) * 8) / 2)' }}
                />
                <Key label='X' pressed={keyState[88]} />
                <Key label='C' pressed={keyState[67]} />
                <Key label='V' pressed={keyState[86]} />
                <Key label='B' pressed={keyState[66]} />
                <Key label='N' pressed={keyState[78]} />
                <Key label='M' pressed={keyState[77]} />
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        </NoSSR>
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({ keyState: state.reducer.keyState })
)(Keyboard);
