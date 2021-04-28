import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from '../../store/movies/movies.model';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDisplayComponent {
  @Input() movie: Movie;
  @Output() movieClicked: EventEmitter<string>;

  constructor(){
    this.movieClicked = new EventEmitter();
  }

  displayMovieDetails(): void {
    this.movieClicked.emit(this.movie.id);
  }
}
