// import { MoviesComponent } from './movies/movies.component';
// import { HeaderComponent } from './header/header.component';
// import { Http } from '@angular/http';
import { AppModule } from './app.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // Http,
        // HeaderComponent,
        // MoviesComponent
        AppModule
      ],
      declarations: [
        AppComponent
      ],
    })
    .compileComponents();
  }));

  xit('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
