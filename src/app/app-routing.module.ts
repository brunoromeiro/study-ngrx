import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyCounterComponent} from './my-counter/my-counter.component';
import {MoviesPageComponent} from './movies-page/movies-page.component';

const routes: Routes = [
  {path: 'counter', component: MyCounterComponent},
  {path: 'movies', component: MoviesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
