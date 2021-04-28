import {MovieEffects} from './movies/movies.effects';
import {moviesReducer} from './movies/movies.reducer';
import {Action, ActionReducerMap} from '@ngrx/store';
import {Movie} from './movies/movies.model';
import {searchReducer} from './search/search.reducer';

export interface AppStateModel {
  movies: Movie[];
  searchStr: string;
}

export const AppState: ActionReducerMap<AppStateModel, Action> = {
  movies: moviesReducer,
  searchStr: searchReducer
};

export const AppEffects = [MovieEffects];
