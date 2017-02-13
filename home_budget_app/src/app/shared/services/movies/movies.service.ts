import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Series } from '../../types/series';

@Injectable()
export class MoviesService {
    private url;

constructor(private http: Http) { }

getSeries() {
    this.url = 'http://www.omdbapi.com/?t=Game%20of%20Thrones';
    return this.http.get(this.url)
        .map(res => res.json())
        .map(seriesData => new Series(seriesData))
        .catch(this.handleError);
    }

getSeason() {
this.url = 'http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1';
return this.http.get(this.url)
    .map(res => res.json())
    .catch(this.handleError);
}

private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
