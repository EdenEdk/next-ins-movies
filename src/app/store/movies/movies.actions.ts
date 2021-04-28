import {createAction, props} from '@ngrx/store';

export const loadMovies = createAction(
  '[Movies] Load Movies'
);

export const showMovieDetails = createAction(
  '[Movies] Show Movie Details',
  props<{ movieId }>()
);

export const updateMovieDetails = createAction(
  '[Movies] Update Movie Details',
  props<{ movie }>()
);

export const removeMovieDetails = createAction(
  '[Movies] Remove Movie Details',
  props<{ movieId }>()
);

export const setMovies = createAction(
  '[Movies] Set Movie',
  props<{ movies }>()
);
