import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../shared/services/movies/movies.service';
import { Series } from './../shared/types/series';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

series: Series;
seasons: any[];
errorMessage: string;

constructor(private moviesService: MoviesService) {}

ngOnInit() {
    this.getSeries();
}

getSeries() {
  this.moviesService.getSeries()
    .subscribe(
      series => {
        this.showItems(series);
        this.series = series;
      },
      error => this.errorMessage = <any>error
      );
}

showItems(items) {
  console.log(items);
}

}
