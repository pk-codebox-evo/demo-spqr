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

@NgModule({
    declarations: [App, OrderVotesPipe, TalksComponent, LoginComponent, LogoutComponent],
    imports: [BrowserModule, FormsModule, routing],
    providers: [StorageService],
    bootstrap: [App],
})
export class AppModule {}
