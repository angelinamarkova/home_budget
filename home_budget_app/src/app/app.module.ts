import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';
import { MoviesModule } from './movies/movies.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    SharedModule,
    HeaderModule,
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
