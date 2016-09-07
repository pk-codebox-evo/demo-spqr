import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { App }   from './app';
import { FormsModule } from "@angular/forms";
import { StorageService } from "./services/storage.service";
import {OrderVotesPipe} from "./order-votes.pipe";
import {routing} from "./app.routes";
import {TalksComponent} from "./talks/talks.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {CollapseDirective} from "./directives/collapse.directive";
import {TalkComponent} from "./talk/talk.component";

@NgModule({
    declarations: [App, OrderVotesPipe, TalkComponent ,TalksComponent, LoginComponent, LogoutComponent, CollapseDirective],
    imports: [BrowserModule, FormsModule, routing],
    providers: [StorageService],
    bootstrap: [App]
})
export class AppModule {}
