import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {db as bq, baqend} from 'baqend/streaming';
var db:baqend = bq;


@Component({
  styles: [`
    .glyphicon-plus-sign {
      cursor: pointer;
    }
  `],
  template: `
    <div class="container">
      <h3>Talks <small (click)="showCreateForm()" class="glyphicon glyphicon-plus-sign"></small></h3>
      
      <form *ngIf="showForm" #createTalkForm="ngForm" (ngSubmit)="createTalk(createTalkForm.value)">
        <div class="input-group">
          <input type="text" ngModel name="title" required class="form-control" placeholder="Talk Title">
          <span class="input-group-btn">
            <button type="submit" [disabled]="!createTalkForm.valid" class="btn btn-default">Create</button>
          </span>    
        </div>  
      </form>  
      
      <ul *ngFor="let talk of talks" class="nav nav-pills nav-stacked">
        <li><a routerLink="/talk/{{talk.key}}">{{talk.title}}</a></li>
      </ul>
    </div>
  `
})
export class TalksComponent {
  talks:any[];
  showForm:boolean;
  today = new Date(Date.now() - Date.now() % (24 * 60 * 60 * 1000));
  
  constructor(private router:Router) {}
  
  ngOnInit() {
    db.Talk.find()
      .greaterThan('created', this.today)
      .ascending('title')
      .resultList((talks) => {
        this.talks = talks;
      });
  }
  
  showCreateForm() {
    if (db.User.me) {
      this.showForm = true;
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  createTalk(values) {
    let talk = new db.Talk();
    talk.creator = db.User.me;
    talk.created = new Date();
    talk.title = values.title;
    talk.save();
    
    this.talks.push(talk);
    
    this.showForm = false;
  }
}