import { KEY_TOGGLE } from '../actions/keyToggle';
import { SET_TARGET } from '../actions/setTarget';

const initialReducerState: IReducerState = {
  target: null,
  keyState: {}
};
export interface IReducerState {
  target: any;
  keyState: object;
}

export default function reducer(state = initialReducerState, action): IReducerState {
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
