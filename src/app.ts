import {Component, OnInit} from '@angular/core';
import {db, baqend} from 'baqend';
var db:baqend = db;

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
      <h3>{{ talk?.title }}</h3>
      
      <form>
        <div class="input-group">
          <input type="text" name="question" required class="form-control" placeholder="Ask a Question?">
          <span class="input-group-btn">
            <button type="submit" class="btn btn-default">Ask</button>
          </span>    
        </div>  
      </form>

      <ul *ngIf="questions" class="list-group">
        <li *ngFor="let question of questions" class="list-group-item">
          <div class="list-group-item-heading">
            <span class="badge">{{ question.votes }}</span>
            <div class="action-btn glyphicon glyphicon-thumbs-up"></div>
          </div>
          <div class="list-group-item-text">
            {{ question.question }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class App implements OnInit {
  public talk;
  public questions = [];

  constructor() {}

  ngOnInit() {
    let id = 'solutions';
    db.Talk.load(id, { local: true }).then(talk => {
      this.talk = talk;
      return db.Question.find()
          .equal('talk', talk)
          .notEqual('state', 'answered')
          .descending('votes')
          .resultList()
    }).then(questions => this.questions = questions);
  }

  ask(values) {

  }

  upVote(values) {

  }

  get isSpeaker() {
    return false;
  }
}
