import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {
    constructor(private http: Http) { }

    getTime(value) {
        return this.http.get('http://localhost/testbot/public/index.php/bot/' + value)
            .map(res => res.text());
    }
}
