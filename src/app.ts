import { Component } from '@angular/core';
import { db } from 'baqend';

@Component({
  selector: 'app',
  styles: [`
    h6 {
      margin-top: 0;
    }

    .badge {
      float: right;
    }

    .action-btn {
      float: right;
      margin: 2px 10px;
      cursor: pointer;
    }

    form {
      margin-bottom: 20px;
    }
  `],
  template: `
    <div class="container">
      <h3>Title</h3>

      <ul class="list-group">
        <li class="list-group-item">
          <div class="list-group-item-heading">
            <span class="badge">42</span>
          </div>
          <div class="list-group-item-text">
            This is the question
          </div>
        </li>
      </ul>
    </div>
  `
})
export class App {
  public talk;
  public questions = [];

  constructor() {}

  ngOnInit() {
  }

  get isSpeaker() {
    return false;
  }
}
