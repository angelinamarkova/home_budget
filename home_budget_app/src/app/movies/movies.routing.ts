import { Route } from '@angular/router';

import { MoviesComponent } from './movies.component';

export const MOVIES_ROUTE = 'movies';

export const MoviesRoutes: Route[] = [
  {
    path: MOVIES_ROUTE,
    component: MoviesComponent
  }
];
