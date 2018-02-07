import { createStore } from 'redux';

import { KEY_TOGGLE } from '../actions/keyToggle';
import { SET_TARGET } from '../actions/setTarget';

const initialState: IStore = {
  target: null,
  keyState: {}
};
export interface IStore {
  target: any;
  keyState: object;
}

function reducer(state: IStore, action): IStore {
  switch (action.type) {
    case KEY_TOGGLE: {
      return { ...state, keyState: { ...state.keyState, [action.payload]: !state.keyState[action.payload] } };
    }
    case SET_TARGET: {
      return { ...state, target: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const makeStore = () => {
  return createStore(reducer, initialState);
};
