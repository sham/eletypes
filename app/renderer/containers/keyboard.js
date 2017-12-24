import React from 'react';
import { MuiThemeProvider } from 'material-ui';

import NoSSR from '../components/NoSSR';
import Key from '../components/key';

export default () =>
  <React.Fragment>
    <NoSSR>
      <MuiThemeProvider>
        <React.Fragment>
          <React.Fragment>
            <Key label='Q' pressed={ false } style={{marginLeft: 'calc((1100px - (88px + 8px) * 10) / 2)'}} />
            <Key label='W' pressed={ false } />
            <Key label='E' pressed={ false } />
            <Key label='R' pressed={ false } />
            <Key label='T' pressed={ false } />
            <Key label='Y' pressed={ false } />
            <Key label='U' pressed={ false } />
            <Key label='I' pressed={ false } />
            <Key label='O' pressed={ false } />
            <Key label='P' pressed={ false } />
          </React.Fragment>
          <React.Fragment>
            <Key label='A' pressed={ false } style={{marginLeft: 'calc((1100px - (88px + 8px) * 9) / 2)'}} />
            <Key label='S' pressed={ false } />
            <Key label='D' pressed={ false } />
            <Key label='F' pressed={ false } />
            <Key label='G' pressed={ false } />
            <Key label='H' pressed={ false } />
            <Key label='J' pressed={ false } />
            <Key label='K' pressed={ false } />
            <Key label='L' pressed={ false } />
          </React.Fragment>
          <React.Fragment>
            <Key label='Z' pressed={ false } style={{marginLeft: 'calc((1100px - (88px + 8px) * 8) / 2)'}} />
            <Key label='X' pressed={ false } />
            <Key label='C' pressed={ false } />
            <Key label='V' pressed={ false } />
            <Key label='B' pressed={ false } />
            <Key label='N' pressed={ false } />
            <Key label='M' pressed={ false } />
          </React.Fragment>
        </React.Fragment>
      </MuiThemeProvider>
    </NoSSR>
  </React.Fragment>;