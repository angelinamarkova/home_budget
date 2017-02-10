import { Route } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const PAGE_NOT_FOUND_ROUTE = '**';

export const PageNotFoundRoutes: Route[] = [
  {
    path: PAGE_NOT_FOUND_ROUTE,
    component: PageNotFoundComponent
  }
];
