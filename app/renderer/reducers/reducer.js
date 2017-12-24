import { KEY_TOGGLE } from '../actions/keyToggle';

const initialState = {
  keyState: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case KEY_TOGGLE: {
      return { ...state, keyState: { ...state.keyState, [action.payload]: !state.keyState[action.payload] } };
    }
    default: {
      return state;
    }
  }
}