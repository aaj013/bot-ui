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
  btn_disable = false;
  btn_name='Send';
  panel_color = 'panel-primary';
  constructor(private appService: AppService){
  }
  title = 'Bot UI';
  messageBox = '';
  onClickMe(value) {
    if(value=='') return;
    this.btn_disable = true;
    this.btn_name ='<span class="glyphicon glyphicon-refresh"></span> Send';
    this.messageBox += '<div class="bubble me">'+ value +'</div><div class="clearfix"></div>';
    this.appService.getMessage(value)
      .subscribe(
      data => {
        let obj = JSON.parse(data);
        if(obj.status.code==200){
          this.messageBox += '<div class="bubble you"><b>' + obj.result.fulfillment.messages[0].speech + '</b></div><div class="clearfix"></div>';
        }
        var objDiv = document.getElementById("stashArea");
        objDiv.scrollTop = objDiv.scrollHeight;
//        this.messageBox += '<b> Unknown error!!! </b><br/>';
      },
      error => alert(error),
      () => {
//        this.stashArea.nativeElement.focus();
        this.btn_disable = false;
        this.btn_name = 'Send';
        console.log("end!");
      }
      );
  }
}
