import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MoviesManagerService} from '../../services/movies-manager/movies-manager.service';
import {loadMovies, setMovies, showMovieDetails, updateMovieDetails} from './movies.actions';
import {buildBasicMovie, Movie} from './movies.model';

@Injectable()
export class MovieEffects {
  setMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadMovies.type),
    mergeMap(() => this.moviesService.getMovies()
      .pipe(
        map(movies => {
          const moviesWithMinimumProps: Movie[] = movies.map(movie => {
            return {
              id: movie.id,
              image: movie.image,
              released: movie.released,
              title: movie.title
            };
          });
          return setMovies({movies: moviesWithMinimumProps});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  getMovieDetails$ = createEffect(() => this.actions$.pipe(
    ofType(showMovieDetails.type),
    mergeMap((payload: any) => this.moviesService.getMovieDetails(payload.movieId)
      .pipe(
        map(movies => {
          return updateMovieDetails({movie: movies[0]});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions,
              private moviesService: MoviesManagerService) {
  }
}
