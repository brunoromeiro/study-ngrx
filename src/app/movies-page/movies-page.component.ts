import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../service/movies/movies.service';
import {Movie} from '../models/movies';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getAll()
      .subscribe(movies => this.movies = movies.Search);
  }

}
