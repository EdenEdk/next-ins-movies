import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {setSearchStr} from './search.actions';

export const searchReducer: ActionReducer<string, Action> = createReducer<string, Action>(
  '',
  on(setSearchStr, (state, {searchStr}) => searchStr.toLowerCase())
);
