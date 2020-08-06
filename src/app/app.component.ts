import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private cookie: CookieService) {

  }
  save(): void {
    console.log('Save Clicked');
    this.cookie.set('userId', '1234');
    this.cookie.set('userType', 'admin');
  }

  get(): void {
    console.log('Get Clicked');
    alert(this.cookie.get('userId'));
  }

}
