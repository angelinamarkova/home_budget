import { Injectable } from '@angular/core';

const MOVIES = [
    {
        name: 'Movie 1',
        author: 'Author 1',
        description: 'Some description'
    },
    {
        name: 'Movie 2',
        author: 'Author 2',
        description: 'Some description'
    }
];

@Injectable()
export class MoviesService {

constructor() { }

getAllMovies() {
    return MOVIES;
}

}
