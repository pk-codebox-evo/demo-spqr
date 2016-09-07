import {Component} from '@angular/core';
import {db as bq, baqend} from 'baqend/streaming';
var db:baqend = bq;

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class App {
    constructor() {}


    get isLoggedIn() {
        return !!db.User.me;
    }
}

