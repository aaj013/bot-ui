import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bot UI';
  message = '';

  onClickMe(value) {
    this.message = this.message+'Input : '+value;
  }
}
