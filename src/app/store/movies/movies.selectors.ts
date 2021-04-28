import {AppStateModel} from '../store';
import {createSelector} from '@ngrx/store';
import {Movie} from './movies.model';

export const selectMovies = (state: AppStateModel) => state.movies;

export const selectModalMovie = createSelector(
  selectMovies,
  (movies: Movie[]) => movies.find(movie => movie.isModalOpen)
);
