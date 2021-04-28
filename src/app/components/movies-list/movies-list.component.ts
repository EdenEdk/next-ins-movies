import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Movie} from '../../store/movies/movies.model';
import {Observable} from 'rxjs';
import {removeMovieDetails, showMovieDetails} from '../../store/movies/movies.actions';
import {selectModalMovie, selectMovies} from '../../store/movies/movies.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Observable<Movie[]>;
  modalMovie: Observable<Movie>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.movies = this.store.select<Movie[]>(selectMovies);
    this.modalMovie = this.store.select<Movie>(selectModalMovie);
  }

  displayMovieDetails(movieId: string): void {
    this.store.dispatch(showMovieDetails({movieId}));
  }

  deleteMovieDetails(movieId: string): void {
    this.store.dispatch(removeMovieDetails({movieId}));
  }
}
