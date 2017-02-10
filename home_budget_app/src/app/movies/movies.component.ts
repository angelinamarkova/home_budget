import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../shared/services/movies/movies.service';
import { Movie } from './../shared/services/movies/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getAllMovies();
   }

  ngOnInit() {
  }

}
