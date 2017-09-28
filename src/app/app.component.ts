import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stashArea: any;
  btn_color = 'btn-primary';
  panel_color = 'panel-primary';
  constructor(private appService: AppService){
  }
  title = 'Bot UI';
  messageBox = '';
  onClickMe(value) {
    //this.messageBox = this.messageBox + this.appService.getTime();
    this.appService.getTime(value)
      .subscribe(
      data => {
        let obj = JSON.parse(data);
        this.messageBox += '<b>' + obj.reply + '</b><br/>';
      },
      error => alert(error),
      () => {
        this.stashArea.nativeElement.focus();
        console.log("end!");
      }
      );
  }
}
