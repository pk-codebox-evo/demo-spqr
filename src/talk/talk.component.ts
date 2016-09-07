//our root app component
import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';
import {db as bq, baqend} from 'baqend';
var db: baqend = bq;

@Component({
    selector: 'my-app',
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
      <h3>{{talk?.title}}</h3>
      
      <form *ngIf="!isSpeaker" #questionForm="ngForm" (ngSubmit)="ask(questionForm.value)">
        <div class="input-group">
          <input type="text" ngModel name="question" required class="form-control" placeholder="Ask a Question?">
          <span class="input-group-btn">
            <button type="submit" [disabled]="!questionForm.valid" class="btn btn-default">Ask</button>
          </span>    
        </div>  
      </form>  
      
      <ul *ngIf="questions" class="list-group">
        <li *ngFor="let question of questions | orderVotes" [class.active]="question.state == 'active'" class="list-group-item">
          <div class="list-group-item-heading">
            <span class="badge">{{question.votes}}</span>
            <div *ngIf="!isSpeaker" (click)="upVote(question)" class="action-btn glyphicon glyphicon-thumbs-up"></div>
            <div *ngIf="isSpeaker" (click)="check(question)" class="action-btn glyphicon glyphicon-ok"></div>
            <div *ngIf="isSpeaker" (click)="remove(question)" class="action-btn glyphicon glyphicon-trash"></div>
            <h6>{{question.creator}} - <small>{{question.date | date:'shortTime'}}</small></h6>
          </div>
          <div class="list-group-item-text">
            {{question.question}}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class TalkComponent implements OnInit {
    public talk;
    public questions = [];

    constructor(private storageService: StorageService) {}

    ngOnInit() {
        let id = 'angular2';
        db.Talk.load(id, {local: true}).then((talk) => {
            this.talk = talk;
            return db.Question.find()
                .equal('talk', talk)
                .notEqual('state', 'answered')
                .descending('votes')
                .resultList()
        }).then((questions) => {
            this.questions = questions;
        });
    }

    get isSpeaker() {
        return this.talk && this.talk.creator == db.User.me;
    }

    ask(values) {
        let question = new db.Question();
        question.question = values.question;
        question.date = new Date();
        question.creator = 'anonymous';
        question.votes = 1;
        question.voters = new Set([this.storageService.token]);
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
        });
    }

    check(question) {
        question.optimisticSave(() => {
            question.state = question.state == 'active' ? 'answered' : 'active';
        });
    }

    remove(question) {
        question.delete({force: true});
        this.questions.splice(this.questions.indexOf(question), 1);
    }
}