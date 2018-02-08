import { createStore, combineReducers } from 'redux';

import reducer, { IReducerState } from './reducers/reducer';

export interface IState {
  reducer: IReducerState;
}

const rootReducer = combineReducers<IState>({ reducer });

export const makeStore = () => {
  return createStore(rootReducer);
};
