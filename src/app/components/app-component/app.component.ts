import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadMovies} from '../../store/movies/movies.actions';
import {setSearchStr} from '../../store/search/search.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(loadMovies());
  }

  setSearch(searchStr: string): void {
    this.store.dispatch(setSearchStr({searchStr}));
  }
}
