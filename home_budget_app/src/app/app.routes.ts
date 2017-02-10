import { Routes } from '@angular/router';
import { MoviesRoutes } from './movies/movies.routing';
import { PageNotFoundRoutes } from './shared/components/page-not-found/page-not-found.routing';

export const ROUTES: Routes = [
    ...MoviesRoutes,
    {
        path: '',
        redirectTo: 'movies', pathMatch: 'full'
    },
    ...PageNotFoundRoutes
];
