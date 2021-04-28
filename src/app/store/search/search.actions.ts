import {createAction, props} from '@ngrx/store';

export const setSearchStr = createAction(
  '[Search] Set Search Str',
  props<{ searchStr }>()
);
