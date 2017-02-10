import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  getCurrentDate() : string {
    let date = new Date();
    let result = "Current time is: " + date;
    return result;
  };

}
