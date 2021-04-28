import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Movie} from '../../store/movies/movies.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements AfterViewInit {
  @Input() modalMovie: Movie;
  @Output() modalClosed: EventEmitter<string>;
  @ViewChild('childModal', {static: false}) childModal: ModalDirective;

  constructor() {
    this.modalClosed = new EventEmitter();
  }

  ngAfterViewInit(): void {
    this.showChildModal();
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
    this.modalClosed.emit(this.modalMovie.id);
  }
}
