import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {removeMovieDetails, setMovies, updateMovieDetails} from './movies.actions';
import {buildBasicMovie, Movie} from './movies.model';

export const moviesReducer: ActionReducer<Movie[], Action> = createReducer<Movie[], Action>(
  [],
  on(setMovies, (state, {movies}) => movies),
  on(updateMovieDetails, (state, {movie}) => updateMovieProps(state, movie)),
  on(removeMovieDetails, (state, {movieId}) => removeMovieProps(state, movieId)),
);

function updateMovieProps(state, movieToUpdate): Movie[] {
  return state.map(movie => {
    if (movie.id === movieToUpdate.id) {
      return {...movieToUpdate, isModalOpen: true};
    }
    return movie;
  });
}

function removeMovieProps(state, movieId): Movie[] {
  return state.map(movie => {
    if (movie.id === movieId) {
      return buildBasicMovie(movie);
    }
    return movie;
  });
}
