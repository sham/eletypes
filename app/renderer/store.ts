import { createStore, combineReducers } from 'redux';

import reducer, { IReducerState } from './reducers/reducer';

export interface IState {
  main: IReducerState;
}

const rootReducer = combineReducers<IState>({ main: reducer });

export const makeStore = () => {
  return createStore(rootReducer);
};
