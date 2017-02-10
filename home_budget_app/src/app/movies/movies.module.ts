import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MoviesComponent],
    exports: [MoviesComponent]
})
export class MoviesModule { }
