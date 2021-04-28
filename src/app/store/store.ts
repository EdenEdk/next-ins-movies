import {MovieEffects} from './movies/movies.effects';
import {moviesReducer} from './movies/movies.reducer';
import {Action, ActionReducerMap} from '@ngrx/store';
import {Movie} from './movies/movies.model';

export interface AppStateModel {
  movies: Movie[];
}

export const AppState: ActionReducerMap<AppStateModel, Action> = {
  movies: moviesReducer
};

export const AppEffects = [MovieEffects];
