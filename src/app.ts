import {Component, OnInit} from '@angular/core';
import {db, baqend} from 'baqend';
import {StorageService} from "./services/storage.service";
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
      
      <form #questionForm="ngForm" *ngIf="!isSpeaker" (ngSubmit)="ask(questionForm.value)">
        <div class="input-group">
          <input type="text" ngModel name="question" required class="form-control" placeholder="Ask a Question?">
          <span class="input-group-btn">
            <button type="submit" [disabled]="!questionForm.valid" class="btn btn-default">Ask</button>
          </span>    
        </div>  
      </form>

      <ul *ngIf="questions" class="list-group">
        <li *ngFor="let question of questions" class="list-group-item">
          <div class="list-group-item-heading">
            <span class="badge">{{ question.votes }}</span>
            <div (click)="upVote(question)" class="action-btn glyphicon glyphicon-thumbs-up"></div>
            <h6>{{question.creator}} - <small>{{question.date}}</small></h6>
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

  constructor(private storageService: StorageService) {}

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
    let question = new db.Question();
    question.question = values.question;
    question.date = new Date();
    question.creator = 'annonymous';
    question.votes = 1;
    question.talk = this.talk;
    question.save();
    this.questions.push(question);
  }

  upVote(question) {
    question.optimisticSave(() => {
      if (question.voters.has(this.storageService.token)) {
        question.votes -= 1;
        question.voters.delete(this.storageService.token);
      } else {
        question.votes += 1;
        question.voters.add(this.storageService.token);
      }
    })
  }

  get isSpeaker() {
    return false;
  }
}
