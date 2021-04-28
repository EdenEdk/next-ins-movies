import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${SERVER_URL}/movies`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get<any[]>(`${SERVER_URL}/movies/${movieId}`);
  }
}
