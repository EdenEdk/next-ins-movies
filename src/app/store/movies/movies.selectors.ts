import {AppStateModel} from '../store';
import {createSelector} from '@ngrx/store';
import {Movie} from './movies.model';
import {selectSearchStr} from '../search/search.selectors';

export const selectMovies = (state: AppStateModel) => state.movies;

export const selectFilteredMovies = createSelector(
  selectMovies,
  selectSearchStr,
  (movies: Movie[], searchStr: string) => searchStr ? movies.filter(movie => movie.title.toLocaleLowerCase().startsWith(searchStr)) : movies
);


export const selectModalMovie = createSelector(
  selectMovies,
  (movies: Movie[]) => movies.find(movie => movie.isModalOpen)
);
