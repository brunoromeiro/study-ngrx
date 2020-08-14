import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../models/movies';
import {Search} from '../../models/search';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    const url = 'http://www.omdbapi.com/?apikey=b55a045c&s=batman';
    return this.http.get(url);
  }
}
