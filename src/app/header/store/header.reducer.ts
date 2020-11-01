import { Action, createReducer, on } from '@ngrx/store';
import * as fromHeaderActions from './header.actions'

export const headerFeatureKey = 'header';

export interface State {
  count: number
}

export const initialState: State = {
  count : 0
};


export const reducer = createReducer(
  initialState,
  on(fromHeaderActions.addToCard, state => ({ ...state, count: state.count + 1}))
);

