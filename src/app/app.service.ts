import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {
    constructor(private http: Http) { }

    getMessage(value) {
        let url = 'http://localhost/testbot/public/index.php/bot/';        
        return this.http.post(
            url,
            {
                message: value
            }
            )
            .map(res => res.text());
    }
}
