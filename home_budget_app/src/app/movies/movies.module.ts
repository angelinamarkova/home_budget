import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MoviesService } from './../shared/services/movies/movies.service';

import { MoviesComponent } from './movies.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [MoviesComponent],
    providers: [MoviesService],
    exports: [MoviesComponent]
})
export class MoviesModule { }
