import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';

import { MoviesService } from './services/movies/movies.service';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    PageNotFoundModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageNotFoundModule
  ],
  providers: [
    MoviesService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
