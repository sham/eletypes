import { KEY_TOGGLE } from '../actions/keyToggle';
import { SET_TARGET } from '../actions/setTarget';

const initialState = {
  target: null,
  keyState: {}
};

export default function reducer(state = initialState, action) {
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
