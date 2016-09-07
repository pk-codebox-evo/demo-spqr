import {Component} from '@angular/core';
import {db, baqend} from 'baqend';
var db:baqend = db;

@Component({
  selector: 'app',
  templateUrl: 'src/app.html'
})
export class App {
  constructor() {}


  get isLoggedIn() {
    return !!db.User.me;
  }
}
