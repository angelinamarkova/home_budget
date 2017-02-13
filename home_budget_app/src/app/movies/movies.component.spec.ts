import { Observable } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MoviesService } from './../shared/services/movies/movies.service';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let de: DebugElement;
  let movieTitle: HTMLElement;
  let moviesService: MoviesService;
  let moviesSpy: any;
  let testSeries = {
    Title: 'Game of Thrones',
    Genre: 'Fantasy',
    imdbRating: 8,
    Plot: 'Plot',
    Actors: 'Peter Dinklage',
    Seasons: 8
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [MoviesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    moviesService = fixture.debugElement.injector.get(MoviesService);
    moviesSpy = spyOn(moviesService, 'getSeries')
      .and.returnValue(Observable.of(testSeries));
    de = fixture.debugElement;
    movieTitle = de.query(By.css('h1')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title element with correct data', () => {
    fixture.detectChanges();
    expect(movieTitle).toEqual(component.series.Title);
  });
});
