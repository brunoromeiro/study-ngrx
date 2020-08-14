import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {MoviesService} from '../service/movies/movies.service';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page] Load Movies'),
    mergeMap(() => this.movieService.getAll()
      .pipe(
        map(result => ({type: '[Movies API] Movies Loaded Success', payload: result.Search})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MoviesService
  ) {
  }
}
